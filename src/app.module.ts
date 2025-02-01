import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin.module';
import { ClientModule } from './modules/client.module';
import { AuthModule } from './modules/auth.module';
import { MenuModule } from './modules/menu.module';
import { UploadModule } from './modules/upload.module';
import { CartModule } from './modules/cart.module'


@Module({
  imports: [AdminModule, ClientModule, AuthModule, MenuModule, UploadModule, CartModule],
})
export class AppModule {}
