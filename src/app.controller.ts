import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //login
  //sign up
  //forgot password
  //update user information
  //delete user
  //get user information
  //get all users
  //verify medical personnel
}
