import { ApiProperty } from "@nestjs/swagger";
import { ApiSchema } from "@utils/decorators";
import { Genders } from "@utils/enums";

@ApiSchema({ name: 'AddCommander' })
export class AddCommanderDto {
    @ApiProperty({

    })
    firstName: string;

    @ApiProperty({

    })
    lastName: string;

    @ApiProperty({

    })
    gender: Genders;

    @ApiProperty({

    })
    personalNumber: string;

    @ApiProperty({

    })
    phoneNumber: string;

    @ApiProperty({

    })
    password: string;
}