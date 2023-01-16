/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { MailerService } from '@nestjs-modules/mailer';

dotenv.config();

@Injectable()
export class NotificationService {
    private logger = new Logger('NotificationService');
    constructor(
     private mailerService: MailerService,
    ) {}

    /**
     * @description it will send an email to the provided email id using any SMTP credntails those provided in env
     * @returns message with success status
     * @param mailOptions will be provided to whome email will be send subject and email template with custom params in json object.
    */
    async sendMail(
      to
    ): Promise<string> {
        const mailOptions = {
            to,
            from: process.env.FROM,
            subject: process.env.SUBJECT,
            text: process.env.TEXT,
        };
        this.logger.log(
            'info',
            `Notification MS - sendMail - for ${JSON.stringify(mailOptions)}`
        );
        await this.mailerService.sendMail(mailOptions);
        return 'Success';
    }

}
