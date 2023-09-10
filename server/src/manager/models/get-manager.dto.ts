import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { IsNotEmpty, IsNumberString } from "class-validator";

@ApiSchema({ name: 'GetManager' })
export class GetManagerDto {
    @ApiProperty({
        description: "Personal number of the manager",
        example: "9089898",
    })
    @IsNotEmpty()
    @IsNumberString()
    personalNumber: string;
}