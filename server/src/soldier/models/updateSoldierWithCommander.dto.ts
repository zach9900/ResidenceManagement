import { ApiProperty } from '@nestjs/swagger';
import { ApiSchema } from '@utils/decorators';

@ApiSchema({ name: 'UpdateSoldierWithCommanderDto' })
export class UpdateSoldierWithCommanderDto {
  @ApiProperty({
    description: 'The personal number of the soldier we want to update',
    example: '9139490',
  })
  soldierPersonalNumber: String;

  @ApiProperty({
    description:
      'The personal number of the commander we want to update the soldier with',
    example: '8123565',
  })
  courseCommanderPersonalNumber: String;
}
