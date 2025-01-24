import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin.module';
import { ClientModule } from './modules/client.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [AdminModule, ClientModule, AuthModule],
})
export class AppModule {}
