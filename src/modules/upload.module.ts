import { Module } from '@nestjs/common';
import { UploadController } from '../controllers/upload.controller';

@Module({
  controllers: [UploadController],
})
export class UploadModule {}
