import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
