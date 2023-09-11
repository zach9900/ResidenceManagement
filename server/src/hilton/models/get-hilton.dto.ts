import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { GeoCoordinateDto } from "@utils/dtos";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@ApiSchema({ name: 'GetHilton' })
export class GetHiltonDto {
    @ApiProperty({
        type: () => GeoCoordinateDto,
        description: "The geographical coordinates of the Hilton",
        example: {
            latitude: 31.25,
            longitude: 35.25
        }
    })
    @IsNotEmpty()
    geoCenter: GeoCoordinateDto;

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