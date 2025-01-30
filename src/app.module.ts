import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin.module';
import { ClientModule } from './modules/client.module';
import { AuthModule } from './modules/auth.module';
import { MenuModule } from './modules/menu.module';

@Module({
  imports: [AdminModule, ClientModule, AuthModule, MenuModule],
})
export class AppModule {}
