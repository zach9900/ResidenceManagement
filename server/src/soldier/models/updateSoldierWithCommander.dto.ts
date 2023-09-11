import { ApiProperty } from '@nestjs/swagger';
import { ApiSchema } from '@utils/decorators';

@ApiSchema({ name: 'UpdateSoldierWithCommander' })
export class UpdateSoldierWithCommanderDto {
  @ApiProperty({
    description: 'The personal number of the soldier we want to update',
    example: '9139490',
  })
  soldierPersonalNumber: string;

  @ApiProperty({
    description:
      'The personal number of the commander we want to update the soldier with',
    example: '8123565',
  })
  courseCommanderPersonalNumber: string;
}
