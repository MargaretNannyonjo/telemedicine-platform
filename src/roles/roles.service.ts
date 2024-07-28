import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { createRoleDto, editRoleDto, getRoleDto } from '../dto/dto';

@Injectable()
export class RolesService {
  constructor(private readonly prismaService: PrismaService) {}
  //add roles
  async createRole(data: createRoleDto) {
    try {
      await this.prismaService
        .$executeRaw`INSERT INTO role (name) VALUES (${data.name}) `;
      return {
        statusCode: 201,
        message: 'New role has been saved successfully.',
      };
    } catch (error) {
      console.log('Error while saving role : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
  //update roles
  async editRoleInformation(dto: editRoleDto) {
    try {
      const { id, ...updateData } = dto;

      const setParts = Object.entries(updateData)
        .map(
          ([key, value]) =>
            `${key} = ${typeof value === 'string' ? `'${value}'` : value}`,
        )
        .join(', ');

      const sql = `UPDATE role SET ${setParts} WHERE id = ${id}`;

      const result = await this.prismaService.$executeRawUnsafe(sql);

      if (result === 0) {
        return {
          statusCode: 404,
          message: 'Role not found',
        };
      }

      const updatedRoles = await this.getRoles();

      return {
        statusCode: 200,
        message: 'Role updated successfully',
        data: updatedRoles.data,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error while updating role information',
        data: error,
      };
    }
  }
  //delete roles
  async deleteRole(data: getRoleDto) {
    const role: [] = await this.prismaService
      .$queryRaw`SELECT * FROM role WHERE id = ${data.id}`;
    try {
      if (role.length > 0) {
        this.prismaService.$queryRaw`DELETE FROM role WHERE id = ${data.id}`;
        return {
          statusCode: 200,
          message: 'Role has been successfully deleted.',
        };
      }
      return {
        statusCode: 404,
        message: 'No role was found matching the provided role id',
      };
    } catch (error) {
      console.log('Error while deleting role : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
  //get roles
  async getRoles() {
    try {
      const roles: [] = await this.prismaService.$queryRaw`SELECT * FROM role`;
      return {
        statusCode: 200,
        message: 'Roles have been fetched successfully',
        data: roles,
      };
    } catch (error) {
      console.log('Error while fetching roles : ', error);
      return {
        statusCode: 500,
        message:
          "Internal server error. Can't perform this action. Contact system support for assistance.",
      };
    }
  }
}
