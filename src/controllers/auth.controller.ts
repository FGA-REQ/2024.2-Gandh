import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "src/services/auth.service";
import { ClientService } from "src/services/client.service";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly clientService: ClientService,
        private readonly authService: AuthService,
    ) {}

    @Post('login')
    async realizarLogIn(@Body() body: {gmail: string; password: string}) {
      try {
        
        const client = await this.clientService.checkLogIn(body);
        const token = await this.authService.generateTokenJWT(client)
        return {statusCode: HttpStatus.OK, message: 'Login realizado com êxito!', token};

      } catch (error) { 

        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);

      }
    }
}