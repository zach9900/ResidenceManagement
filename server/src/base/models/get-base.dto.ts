import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsNotEmpty, IsString } from "class-validator";

@ApiSchema({ name: 'GetBase' })
export class GetBaseDto {
    @ApiProperty({
        description: 'The name of the base you want to get',
        example: 'Techni'
    })
    @IsNotEmpty()
    @IsString()
    baseName: string;

    @ApiProperty({
        description: 'The personal number of the commander who asked for the base',
        example: '9089898'
    })
    @IsNotEmpty()
    @IsString()
    personalNumber: string;
}