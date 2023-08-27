import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

@ApiSchema({ name: 'Login' })
export class LoginDto {
    @ApiProperty({
        description: 'The personal number of the commander who wnats to authenticate',
        example: '9089898'
    })
    @IsNotEmpty()
    @IsNumberString()
    personalNumber: string;

    @ApiProperty({
        description: 'The password of the commander',
        example: 'very_secret_password'
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}