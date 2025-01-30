import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(); // Adicionar validação global, se necessário
  app.setGlobalPrefix('api'); // Prefixo global para rotas
  await app.listen(3000);
  console.log('Servidor rodando na porta 3000');
}
bootstrap();
