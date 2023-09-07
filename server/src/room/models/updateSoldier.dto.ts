import { ApiProperty } from '@nestjs/swagger';
import { ApiSchema } from '@utils/decorators';

@ApiSchema({ name: 'UpdateSoldier' })
export class UpdateSoldierDto {
  @ApiProperty({
    description: 'The number of the room',
    example: '26',
  })
  roomNumber: number;

  @ApiProperty({
    description: 'The personalNumber of the commander we want to move',
    example: '9140209',
  })
  soldierPersonalNumber: string;
}
