import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class loginDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class getUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  role_id: string;
  @IsString()
  @IsNotEmpty()
  firstname: string;
  @IsString()
  @IsNotEmpty()
  lastname: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  contact: string;
  @IsDateString()
  @IsNotEmpty()
  dob: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class renewAccessTokenDto {
  @IsString()
  @IsNotEmpty()
  refresh_token: string;

  @IsString()
  @IsNotEmpty()
  id: number;
}

export class resetPasswordDto {
  @IsString()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(20, { message: 'Password cannot be longer than 20 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
    message:
      'Password must contain at least one lowercase letter, one uppercase letter, and one number',
  })
  @IsNotEmpty()
  @IsString()
  new_password: string;
}

export class editUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsString()
  gender: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  contact: string;
  @IsDateString()
  dob: string;
  @IsString()
  city: string;
  @IsString()
  password: string;
  @IsString()
  profileimageurl: string;
  @IsString()
  idimageurl: string;
  @IsString()
  specialization: string;
  @IsString()
  availability: string;
  @IsString()
  qualification: [];
}

export class createRoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class getRoleDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class editRoleDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
}
