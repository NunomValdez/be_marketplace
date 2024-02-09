import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Specify the origin of your Vue app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Optional: Specify HTTP methods allowed
    allowedHeaders: 'Content-Type, Accept', // Optional: Specify headers allowed
  });
  await app.listen(3000);
}
bootstrap();
