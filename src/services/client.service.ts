import { BadRequestException, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';
import * as bcrypt from 'bcrypt';
import { Phone } from 'src/domain/value-objects/Phone';
import { Email } from 'src/domain/value-objects/Email';
import { Password } from 'src/domain/value-objects/password';
import { ClientProfileDTO } from 'src/dtos/client-profile.dto';
import { client } from 'db/db';
import { noop } from 'rxjs';
import { updateClientDTO } from 'src/dtos/update-client.dto';


@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async getAll() {
    return this.clientRepository.getAll();
  }

  async create(client: {
    name: string;
    gmail: string;
    phone: string;
    password: string;
  }) {
    const gmail = Email.create(client.gmail);
    const phone = Phone.create(client.phone);
    const password = Password.create(client.password);
    const existingClient = await this.clientRepository.findOneByEmail(client.gmail);
    if (existingClient) {
      throw new BadRequestException('Já existe um usuário com esse email!');
    }
    const hashedPassword = await bcrypt.hash(password.value, 10);
    await this.clientRepository.create({
      ...client,
      password: hashedPassword,
      phone: phone.value,
      gmail: gmail.value,
    });
  }

  async checkLogIn(credentials: { gmail: string; password: string }) {
    const client = await this.clientRepository.findOneByEmail(credentials.gmail);

    if(credentials.gmail == null) {
      throw new BadRequestException('O campo do email deve ser preenchido!');
    }

    if(credentials.password == null) {
      throw new BadRequestException('O campo da senha deve ser preenchido!');
    }

    if(!client) {
      throw new UnauthorizedException(
        'Usuário não encontrado! Verifique se o email está correto.',
      );
    }

    const password = Password.create(credentials.password).value;

    const isPasswordValid = await bcrypt.compare(password, client.password);

    if(isPasswordValid) {
      return client;
    } else {
      throw new UnauthorizedException('Senha inválida!');
    }
    
  }

  async getFidelity(id: number) {
    const client = await this.clientRepository.findOneById(id);
    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return client.fidelity;
  }

  async addFidelity(id: number, points: number) {
    const client = await this.clientRepository.findOneById(id);
    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }
    await this.clientRepository.updateFidelity(id, client.fidelity + points);
  }

  async seeProfile(id: number): Promise<ClientProfileDTO> {
    const client = await this.clientRepository.findOneById(id);

    if(!client) {
      throw new NotFoundException('Cliente não encontrado');
    }
    
    const profileClient = new ClientProfileDTO(
                                client.name, 
                                client.gmail, 
                                client.phone, 
                                client.fidelity );

    return profileClient;
  }

  async updateClientProfile(id: number, updateData: updateClientDTO): Promise<ClientProfileDTO> {
    const existingClient = await this.clientRepository.findOneById(id);

    if(!existingClient) {
      throw new NotFoundException('Cliente não encontrado');
    }

    const updateClient: Partial<Client> = {};

    if(updateData.name) {
      updateClient.name = updateData.name;
    }

    if(updateData.gmail) {
      const newEmail = Email.create(updateData.gmail).value;

      const alreadyExists = await this.clientRepository.findOneByEmail(newEmail);
      if(alreadyExists && alreadyExists.id !== id) {
        throw new BadRequestException('Este email já está em uso');
      }

      updateClient.gmail = newEmail;
    }

    if(updateData.phone) {
      updateClient.phone = Phone.create(updateData.phone).value;
    }

    if(updateData.password) {
      const newPassword = Password.create(updateData.password)
      updateClient.password = await bcrypt.hash(newPassword.value, 10);
    }

    await this.clientRepository.updateFields(id, updateClient);

    return this.clientRepository.findOneById(id);
  }
}
