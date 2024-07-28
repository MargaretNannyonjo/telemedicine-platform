import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import {
  createRoleDto,
  createUserDto,
  editRoleDto,
  editUserDto,
  getRoleDto,
  getUserDto,
  loginDto,
  resetPasswordDto,
} from './dto/dto';
import { RolesService } from './roles/roles.service';
import { JwtAuthGuard } from './jwt/jwt-guard';

@Controller('api/v1')
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly roleService: RolesService,
  ) {}
  //login
  @Post('/login')
  async userLogin(dto: loginDto) {
    const response = await this.authService.login(dto);
    return response;
  }
  //sign up
  @Post('/register')
  async userRegister(dto: createUserDto) {
    const response = await this.authService.createUser(dto);
    return response;
  }
  //forgot password
  @Post('/reset-password')
  async resetPassword(dto: resetPasswordDto) {
    const response = await this.authService.resetPassword(dto);
    return response;
  }
  //update user information
  @UseGuards(JwtAuthGuard)
  @Post('/edit-user')
  async editUser(dto: editUserDto) {
    const response = await this.authService.editUserInformation(dto);
    return response;
  }
  //delete user
  @UseGuards(JwtAuthGuard)
  @Post('/delete-user')
  async deleteUser(dto: getUserDto) {
    const response = await this.authService.deleteUser(dto);
    return response;
  }
  //get user information
  @UseGuards(JwtAuthGuard)
  @Get('/get-user')
  async getuser(dto: getUserDto) {
    const response = await this.authService.getUser(dto);
    return response;
  }
  //get all users
  @UseGuards(JwtAuthGuard)
  @Get('/get-all-users')
  async getAllUsers() {
    const response = await this.authService.getAllUsers();
    return response;
  }
  //verify medical personnel
  @UseGuards(JwtAuthGuard)
  @Post('/verify-user')
  async verifyUser(dto: getUserDto) {
    const response = await this.authService.verifyMedicalPersonnel(dto);
    return response;
  }

  //Roles
  //add role
  @UseGuards(JwtAuthGuard)
  @Post('/add-role')
  async addRole(dto: createRoleDto) {
    const response = await this.roleService.createRole(dto);
    return response;
  }
  //delete role
  @UseGuards(JwtAuthGuard)
  @Post('/delete-role')
  async deleteRole(dto: getRoleDto) {
    const response = await this.roleService.deleteRole(dto);
    return response;
  }
  //get roles
  @UseGuards(JwtAuthGuard)
  @Get('/get-roles')
  async getRoles() {
    const response = await this.roleService.getRoles();
    return response;
  }
  //update role
  @UseGuards(JwtAuthGuard)
  @Post('/edit-role')
  async editRole(dto: editRoleDto) {
    const response = await this.roleService.editRoleInformation(dto);
    return response;
  }
}
