import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'Email address'})
    @IsString({message: 'Should be a string'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;

    @ApiProperty({example: 'qwerty', description: 'User password'})
    @IsString({message: 'Should be a string'})
    @Length(4, 20, {message: 'From 4 to 20 characters'})
    readonly password: string;
}