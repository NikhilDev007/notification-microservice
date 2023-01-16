import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'notificaiondata',
    protoPath: join(__dirname, '../src/_proto/notification.proto'),
  },
};


async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  await app.listen();
}
bootstrap();
