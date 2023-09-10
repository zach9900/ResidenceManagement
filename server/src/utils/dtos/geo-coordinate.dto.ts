import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsNotEmpty, IsNumber } from "class-validator";

@ApiSchema({ name: "GeoCoordinate" })
export class GeoCoordinateDto {
    @ApiProperty({
        description: "latitude of the geo ccordinate - in degrees",
        example: 31.25
    })
    @IsNotEmpty()
    @IsNumber()
    latitude: number;

    @ApiProperty({
        description: "longitude of the geo ccordinate - in degrees",
        example: 35.25
    })
    @IsNotEmpty()
    @IsNumber()
    longitude: number;
}