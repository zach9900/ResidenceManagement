import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsNotEmpty, IsNumberString } from "class-validator";

@ApiSchema({ name: 'UpdateManager' })
export class UpdateManagerDto {
    @ApiProperty({
        description: 'The personal number of the manager who wants to update his password',
        example: '8064585'
    })
    @IsNotEmpty()
    @IsNumberString()
    personalNumber: string;

    @ApiProperty({
        description: 'The new password for the manager',
    })
    @IsNotEmpty()
    password: string;
}