import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { GeoCoordinateDto } from "@utils/dtos";
import { IsNotEmpty } from "class-validator";

@ApiSchema({ name: "Get Floor" })
export class GetFloorDto {
    @ApiProperty()
    @IsNotEmpty()
    geoLocation: GeoCoordinateDto;
}