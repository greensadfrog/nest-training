import {ApiProperty} from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'Email address'})
    readonly email: string;

    @ApiProperty({example: 'qwerty', description: 'User password'})
    readonly password: string;
}