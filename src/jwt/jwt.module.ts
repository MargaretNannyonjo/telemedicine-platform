import { Module } from '@nestjs/common';
import { JwtTokenService } from './jwt.service';
import { env } from 'process';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({
      secret: env.SECRET_KEY,
      signOptions: { expiresIn: '7h' },
    }),
  ],
  providers: [JwtTokenService],
})
export class JwtTokenModule {}
