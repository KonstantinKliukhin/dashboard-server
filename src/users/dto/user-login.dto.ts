import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'incorrect email' })
	email: string;

	@MinLength(7)
	@MaxLength(15)
	@IsString({ message: 'no password provided' })
	password: string;
}
