import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsNotEmpty, IsNumber } from "class-validator";

@ApiSchema({ name: 'AddRoom' })
export class AddRoomDto {
    @ApiProperty({

    })
    @IsNotEmpty()
    @IsNumber()
    roomNumber: number;

    @ApiProperty({

    })
    @IsNotEmpty()
    @IsNumber()
    bedsNumber: number;
}