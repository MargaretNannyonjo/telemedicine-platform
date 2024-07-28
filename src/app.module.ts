import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { RolesService } from './roles/roles.service';
import { PrismaModule } from './prisma/prisma.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';
import { JwtTokenModule } from './jwt/jwt.module';
import { JwtTokenService } from './jwt/jwt.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RolesModule,
    AuthModule,
    MailModule,
    JwtTokenModule,
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    AuthService,
    RolesService,
    MailService,
    JwtTokenService,
  ],
})
export class AppModule {}
