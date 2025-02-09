import { Module } from '@nestjs/common';
import { RequestController } from '../controllers/request.controller';
import { RequestService } from '../services/request.service';
import { RequestRepository } from '../repositories/request.repository';

@Module({
  controllers: [RequestController],
  providers: [RequestService, RequestRepository],
})
export class RequestModule {}