import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";

@ApiSchema({ name: 'GetCommander' })
export class GetCommanderDto {
    @ApiProperty({

    })
    personalNumber: string;
}