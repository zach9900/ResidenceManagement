import { ApiProperty } from "@nestjs/swagger";
import { AddRoomDto } from "@utils/add-room.dto";
import { ApiSchema } from "@utils/decorators";
import { GeoCoordinateDto } from "@utils/dtos";
import { IsNotEmpty, IsNumber } from "class-validator";

@ApiSchema({ name: "Add Floor" })
export class AddFloorDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    floorNumber: number;

    @ApiProperty()
    @IsNotEmpty()
    geoLocation: GeoCoordinateDto;

    @ApiProperty()
    @IsNotEmpty()
    rooms: AddRoomDto[];
}