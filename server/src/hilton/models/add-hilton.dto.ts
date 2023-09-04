import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema, IsValidGender } from "@utils/decorators";
import { GeoCoordinateDto } from "@utils/dtos";
import { Genders } from "@utils/enums";
import { IsNotEmpty, IsNumber } from "class-validator";

@ApiSchema({name: "AddHilton"})
export class AddHiltonDto {
    @ApiProperty({
        enum: Genders,
        enumName: "Genders",
        description: "The gender allowed to be in the Hilton",
    })
    @IsValidGender()
    allowedGender: Genders;

    @ApiProperty({
        description: "The number of the Hilton's building",
        example: 192
    })
    @IsNotEmpty()
    @IsNumber()
    buildingNumber: number;

    /*@ApiProperty()
    floors: Floor[]; // TODO: change to array of DTOs floors*/

    /*@ApiProperty()
    buildingManager: Commander; // TODO: change to Commander DTO*/

    @ApiProperty({
        description: "The geographical coordinates of the Hilton",
        example: {
            latitude: 31.25,
            longitude: 35.25
        }
    })
    @IsNotEmpty()
    geoCenter: GeoCoordinateDto;
}