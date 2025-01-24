import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin.module';
import { ClientModule } from './modules/client.module';

@Module({
  imports: [AdminModule, ClientModule],
})
export class AppModule {}
