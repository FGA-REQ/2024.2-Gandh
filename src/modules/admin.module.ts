import { Module } from '@nestjs/common';
import { AdminController } from '../controllers/admin.controller';
import { AdminService } from '../services/admin.service';
import { AdminRepository } from '../repositories/admin.repository';

@Module({
  controllers: [AdminController],
  providers: [AdminService, AdminRepository],
})
export class AdminModule {}
