import { ApiProperty } from '@nestjs/swagger';
import { Base } from '@utils/base.schema';
import { ApiSchema } from '@utils/decorators';
import { Courses, Gafs, Genders, Roles } from '@utils/enums';
import { Bases } from '@utils/enums/bases.enum';

@ApiSchema({ name: 'AddSoldier' })
export class AddSoldierDto {
  @ApiProperty({
    description: 'The first name of the soldier',
    example: 'ron',
  })
  firstName: String;

  @ApiProperty({
    description: 'The last name of the soldier',
    example: 'shtar',
  })
  lastName: String;

  @ApiProperty({
    description: 'The gender of the soldier',
    example: Genders.Male,
  })
  gender: Genders;

  @ApiProperty({
    description: 'The gaf of the soldier',
    example: Gafs.SystemsEngineering,
  })
  gaf: Gafs;

  @ApiProperty({
    description: 'The course of the soldier',
    example: Courses._1400_,
  })
  course: Courses;

  @ApiProperty({
    description: 'The personalNumber of the soldier',
    example: '9140209',
  })
  soldierPersonalNumber: string;

  @ApiProperty({
    description: 'The personalNumber of the commander of the soldier',
    example: '8435662',
  })
  PersonalNumberOfCommander: string;

  @ApiProperty({
    description: 'The base of the soldier',
    example: Bases.TECHNI,
  })
  base: Bases;
}
