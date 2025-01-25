import { Module } from "@nestjs/common";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/services/auth.service";
import { ClientModule } from "./client.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [ClientModule,
        ConfigModule.forRoot(),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                const secret = configService.get<string>('SECRET_JWT');
                if(!secret) {
                    throw new Error('SECRET_JWT não foi devidamente configurada.')
                }
        
                return {
                    secret, signOptions: {expiresIn: '1h'},
                }
            },
        }),
    ],
})

export class AuthModule {}