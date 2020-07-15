import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.MQTT,
        options: {
            url: 'mqtt://localhost:1883'
        }
    });
    await app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
