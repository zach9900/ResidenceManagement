import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { GeoCoordinateDto } from "@utils/dtos";
import { IsNotEmpty, IsString } from "class-validator";

@ApiSchema({ name: 'AddBase' })
export class AddBaseDto {
    @ApiProperty({

    })
    @IsNotEmpty()
    @IsString()
    baseName: string;

    @ApiProperty({

    })
    @IsNotEmpty()
    geoCenter: GeoCoordinateDto;
}