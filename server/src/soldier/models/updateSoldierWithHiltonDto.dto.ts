import { ApiProperty } from '@nestjs/swagger';
import { ApiSchema } from '@utils/decorators';

@ApiSchema({ name: 'UpdateSoldierWithHilton' })
export class UpdateSoldierWithHiltonDto {
  @ApiProperty({
    description: 'The personal number of the soldier we want to update',
    example: '9139490',
  })
  soldierPersonalNumber: String;

  @ApiProperty({
    description: 'The number of the hilton we want to update the soldier with',
    example: 192,
  })
  updateHiltonNumber: number;
}
