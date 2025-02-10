import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor (private readonly jwtService: JwtService) {}

    async generateTokenJWT(client: any): Promise<string> {
        const payload = {sub: client.id, email: client.gmail}

        return this.jwtService.sign(payload);
    }
}