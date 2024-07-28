import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  createUserDto,
  editUserDto,
  getUserDto,
  loginDto,
  renewAccessTokenDto,
  resetPasswordDto,
} from '../dto/dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '../jwt/jwt.service';
import { MailService } from '../mail/mail.service';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}
  //login with email and password
  async login(data: loginDto) {
    try {
      const user: {
        id: number;
        lastname: string;
        email: string;
        role: string;
        password: string;
      }[] = await this.prismaService
        .$queryRaw`SELECT id, lastname, email, password FROM user WHERE email = ${data.email}`;
      if (user.length > 0) {
        const validPass: boolean = await bcrypt.compare(
          data.password,
          user[0].password,
        );
        if (validPass) {
          const userData = {
            id: user[0].id,
            lastname: user[0].lastname,
            email: user[0].email,
            role: user[0].role,
          };
          const { lastname, ...otherUserData } = userData;
          const authTokens =
            await this.jwtService.generateAccessToken(otherUserData);
          return {
            statusCode: 200,
            message:
              'Hoooray!! We found you. Please wait a moment as we grant you access.',
            tokens: authTokens,
            lastname: lastname,
            userInfo: otherUserData,
          };
        }
        return {
          statusCode: 401,
          message: 'Invalid credentials. Wrong password.',
        };
      }
      return {
        statusCode: 404,
        message:
          "We couldn't find an account associated with the email you provided.",
      };
    } catch (error) {
      console.log('Error while signing the user in: ', error);
      return {
        statusCode: 500,
        message:
          'Internal server error. Please contact system support for assistance',
      };
    }
  }

  //sign up
  async createUser(data: createUserDto) {
    try {
      const existingUser: [] = await this.prismaService
        .$queryRaw`SELECT user_id FROM user WHERE email = ${data.email}`;
      if (existingUser.length > 0) {
        return {
          statusCode: 403,
          message:
            'The email you are trying to register is already associated with an existing account.',
        };
      }
      const userPassword = await bcrypt.hash(data.password, 12);
      await this.prismaService
        .$queryRaw`INSERT INTO user (role_id, firstname, lastname, gender, email, contact, dob, password) VALUES (${data.role_id}, ${data.firstname}, ${data.lastname}, ${data.gender}, ${data.email},  ${data.contact}, ${data.dob}, ${userPassword}) `;
      this.mailService.sendWelcomeEmail(data.lastname, data.email);
      return {
        statusCode: 201,
        message: 'Account created successfully. Please log in.',
      };
    } catch (error) {
      console.log('Error while creating user : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
  //reset password
  async resetPassword(data: resetPasswordDto) {
    try {
      const user: [] = await this.prismaService
        .$queryRaw`SELECT id FROM user WHERE email = ${data.email}`;
      if (user.length > 0) {
        const newPasswordHash = await bcrypt.hash(data.new_password, 12);
        await this.prismaService
          .$queryRaw`UPDATE user SET password = ${newPasswordHash} WHERE id = ${user}`;
        return {
          statusCode: 200,
          message: `Your password has been successfully reset.`,
        };
      }
    } catch (error) {
      console.log('Error while resetting user password : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
  //edituser information
  async editUserInformation(dto: editUserDto) {
    try {
      const { id, ...updateData } = dto;

      const setParts = Object.entries(updateData)
        .map(
          ([key, value]) =>
            `${key} = ${typeof value === 'string' ? `'${value}'` : value}`,
        )
        .join(', ');

      const sql = `UPDATE user SET ${setParts} WHERE id = ${id}`;

      const result = await this.prismaService.$executeRawUnsafe(sql);

      if (result === 0) {
        return {
          statusCode: 404,
          message: 'User not found',
        };
      }

      const updatedUserData = await this.getUser({ id: id });

      return {
        statusCode: 200,
        message: 'User information updated successfully',
        data: updatedUserData.data,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error while updating user information',
        data: error,
      };
    }
  }

  //renew access token
  async renewAccessToken(data: renewAccessTokenDto) {
    try {
      const refreshToken = data.refresh_token;
      const userData = await this.prismaService
        .$queryRaw`SELECT id, lastname, email, role FROM user WHERE id = ${data.id}`;
      const isRefreshTokenValid: boolean =
        await this.jwtService.verifyTokens(refreshToken);
      if (isRefreshTokenValid) {
        return await this.jwtService.generateAccessToken(userData[0]);
      }
    } catch (error) {
      console.log('Error while renewing access token: ', error);
      return {
        statusCode: 500,
        message: 'Internal server error',
      };
    }
  }
  //delete user
  async deleteUser(data: getUserDto) {
    const user: [] = await this.prismaService
      .$queryRaw`SELECT user_id FROM user WHERE user_id = ${data.id}`;
    try {
      if (user.length > 0) {
        this.prismaService
          .$queryRaw`DELETE FROM user WHERE user_id = ${data.id}`;
        return {
          statusCode: 200,
          message: 'User has been successfully deleted.',
        };
      }
      return {
        statusCode: 401,
        message: 'No user account was found matching the provided user_id',
      };
    } catch (error) {
      console.log('Error while deleting user : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
  //get user information
  async getUser(data: getUserDto) {
    try {
      const id = data.id;
      const user: [] = await this.prismaService
        .$queryRaw`SELECT firstname, lastname, gender, email, role, contact, dob, profileimageurl, isverified FROM user WHERE id = ${id}`;
      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'User has been found.',
          data: user,
        };
      }
      return {
        statusCode: 404,
        message: 'No matching user has been found.',
      };
    } catch (error) {
      console.log('Error while fetching user data : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
  //get all users
  async getAllUsers() {
    try {
      const users: [] = await this.prismaService
        .$queryRaw`SELECT firstname, lastname, gender, email, role, contact, dob, profileimageurl, isverified FROM user`;
      if (users.length > 0) {
        return {
          statusCode: 200,
          message: 'Users successfully fetched',
          data: users,
        };
      }
      return {
        statusCode: 200,
        message: 'No users found',
        data: users,
      };
    } catch (error) {
      console.log('Error while fetching users : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
  //verify medical personnel
  async verifyMedicalPersonnel(data: getUserDto) {
    try {
      const id = data.id;
      const user: IUser[] = await this.prismaService
        .$queryRaw`SELECT * FROM user WHERE id = ${id}`;
      if (user.length > 0) {
        if (user[0].role_id === '2') {
          await this.prismaService
            .$executeRaw`UPDATE user SET isverified = true WHERE id = ${id}`;
          return {
            statusCode: 200,
            message: `User has been verified.`,
            data: null,
          };
        }
      } else {
        return {
          statusCode: 404,
          message: 'User not found',
          data: user,
        };
      }
    } catch (error) {
      console.log('Error while fetching users : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
}
