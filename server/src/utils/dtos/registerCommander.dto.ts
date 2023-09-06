import { ApiProperty } from '@nestjs/swagger';
import { Base } from '@utils/base.schema';
import { ApiSchema } from '@utils/decorators';
import { Courses, Gafs, Genders, Roles } from '@utils/enums';
import { Bases } from '@utils/enums/bases.enum';

@ApiSchema({ name: 'AddCommanderDto' })
export class AddCommanderDto {
  @ApiProperty({
    description: 'The first name of the commander',
    example: 'haim',
  })
  firstName: String;

  @ApiProperty({
    description: 'The last name of the commander',
    example: 'davidov',
  })
  lastName: String;

  @ApiProperty({
    description: 'The gender of the commander',
    example: Genders.Male,
  })
  gender: Genders;

  @ApiProperty({
    description: 'The personalNumber of the commander',
    example: '9140209',
  })
  commanderPersonalNumber: string;

  @ApiProperty({
    description: 'The phoneNumber of the commander',
    example: '0506723914',
  })
  phoneNumber: string;

  @ApiProperty({
    description: 'The password of the commander',
    example: 'ABm12345678',
  })
  password: string;

  @ApiProperty({
    description: 'The base of the commander',
    example: Bases.TECHNI,
  })
  base: Bases;
}
