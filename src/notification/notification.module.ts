/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MailerModule } from '@nestjs-modules/mailer/dist';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.HOST,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        }
      }
    })
  ],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule {}
