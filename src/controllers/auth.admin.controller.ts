import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "src/services/auth.service";
import { AdminService } from "src/services/admin.service";

// Define o controlador para rotas que começam com '/auth'
@Controller('auth')
export class AuthAdminController {
    constructor(
        // Injeta o serviço de administração
        private readonly adminService: AdminService,
        // Injeta o serviço de autenticação
        private readonly authService: AuthService,
    ) {}

    // Define um endpoint POST na rota '/auth/login'
    @Post('login')
    async realizarLogIn(@Body() body: {gmail: string; password: string}) {
      try {
        // Verifica as credenciais do administrador
        const admin = await this.adminService.checkLogIn(body);
        // Gera um token JWT se as credenciais forem válidas
        const token = await this.authService.generateTokenJWT(admin)
        // Retorna uma resposta de sucesso com o token
        return {statusCode: HttpStatus.OK, message: 'Login realizado com êxito!', token};

      } catch (error) { 
        // Lança uma exceção HTTP se ocorrer um erro
        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
      }
    }
}