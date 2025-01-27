import { Module } from "@nestjs/common";
import { AuthAdminController } from "src/controllers/auth.admin.controller";
import { AuthService } from "src/services/auth.service";
import { AdminModule } from "./admin.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    // Define os controladores que fazem parte deste módulo
    controllers: [AuthAdminController],
    // Define os provedores que fazem parte deste módulo
    providers: [AuthService],
    // Define os módulos importados por este módulo
    imports: [
        AdminModule, // Importa o módulo de administração
        ConfigModule.forRoot(), // Configura o módulo de configuração
        JwtModule.registerAsync({
            imports: [ConfigModule], // Importa o módulo de configuração
            inject: [ConfigService], // Injeta o serviço de configuração
            useFactory: (configService: ConfigService) => {
                // Obtém o segredo JWT das variáveis de ambiente
                const secret = configService.get<string>('SECRET_JWT');
                if (!secret) {
                    throw new Error('SECRET_JWT não foi devidamente configurada.');
                }
                // Configura o módulo JWT com o segredo e opções de assinatura
                return {
                    secret, signOptions: { expiresIn: '1h' },
                };
            },
        }),
    ],
})
export class AuthAdminModule {}