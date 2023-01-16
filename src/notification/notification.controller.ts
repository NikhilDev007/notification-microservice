import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('email')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  /**
   * This micorservice used to send confirmation email to user who has recently registered.
   * @param createNotificationDto this contains the email id of user who registered 
   * @returns the success message.
   */
  @GrpcMethod('NotificationService', 'SendConfirmationMail')
  async sendConfirmationMail(
    createNotificationDto: CreateNotificationDto,
  ): Promise<string> {
    return this.notificationService.sendMail(createNotificationDto.email);
  }
}
