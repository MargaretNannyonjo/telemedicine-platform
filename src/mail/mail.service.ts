import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { env } from 'process';
import { generateWelcomeEmail } from './email_template/welcome_email';
import { requestUserAccessKeyEmail } from './email_template/request_access_key';

@Injectable()
export class MailService {
  private readonly transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT'),
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
      tls: {
        ciphers:
          'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256',
      },
      authMethod: 'PLAIN',
    });
  }

  async sendWelcomeEmail(name: string, to: string) {
    const emailTemplate: string = generateWelcomeEmail(name);
    const mailOptions = {
      to,
      subject: 'Welcome To Virtual Care',
      text: emailTemplate,
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendAccessKeyEmail(name: string, accessKey: string, to: string) {
    const emailTemplate: string = requestUserAccessKeyEmail(name, accessKey);
    const mailOptions = {
      from: env.SMTP_USER,
      to,
      subject: 'Your authentication access key',
      text: emailTemplate,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
