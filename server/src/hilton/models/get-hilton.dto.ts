import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@ApiSchema({ name: 'GetHilton' })
export class GetHiltonDto {
    @ApiProperty({
        description: 'The number of the hilton you would like to get',
        example: 192
    })
    @IsNotEmpty()
    @IsNumber()
    hiltonNumber: number;

    /*@ApiProperty({
        description: 'The base where the requested hilton is located',
        example: 'Techni'
    })
    @IsNotEmpty()
    @IsString()
    base: string;*/
}