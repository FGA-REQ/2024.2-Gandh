import { Module } from "@nestjs/common";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/services/auth.service";
import { ClientModule } from "./client.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [ClientModule],
})

export class AuthModule {}