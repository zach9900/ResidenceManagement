import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsValidPhoneNumber } from "@utils/decorators/is-valid-phone-number.decorator";
import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

@ApiSchema({ name: 'AddManager' })
export class AddManagerDto {
    @ApiProperty({
        description: 'The first name of the manager',
        example: 'John',
    })
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({
        description: 'The last name of the manager',
        example: 'Doe',
    })
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty({
        description: 'The phone number of the manager',
        example: '0501112233',
    })
    @IsNotEmpty()
    @IsNumberString()
    @IsValidPhoneNumber()
    phoneNumber: string;

    @ApiProperty({
        description: 'The personal number of the manager',
        example: '8076545',
    })
    @IsNotEmpty()
    @IsNumberString()
    personalNumber: string;

    @ApiProperty({
        description: 'The password the manager uses for the application',
    })
    @IsNotEmpty()
    password: string;
}
