import { ApiProperty } from '@nestjs/swagger';
import { Base } from '@utils/base.schema';
import { ApiSchema } from '@utils/decorators';
import { Courses, Gafs, Genders, Roles } from '@utils/enums';
import { Bases } from '@utils/enums/bases.enum';

@ApiSchema({ name: 'AddCourseCommander' })
export class AddCourseCommanderDto {
  @ApiProperty({
    description: 'The first name of the Coursecommander',
    example: 'haim',
  })
  firstName: string;

  @ApiProperty({
    description: 'The last name of the Coursecommander',
    example: 'davidov',
  })
  lastName: string;

  @ApiProperty({
    description: 'The gender of the Coursecommander',
    example: Genders.Male,
  })
  gender: Genders;

  @ApiProperty({
    description: 'The gaf of the Coursecommander',
    example: Gafs.SystemsEngineering,
  })
  gaf: Gafs;

  @ApiProperty({
    description: 'The course that the Coursecommander command on',
    example: Courses._1400_,
  })
  course: Courses;

  @ApiProperty({
    description: 'The personalNumber of the courseCommander',
    example: '9140209',
  })
  courseCommanderPersonalNumber: string;

  @ApiProperty({
    description: 'The phoneNumber of the courseCommander',
    example: '0506723914',
  })
  phoneNumber: string;

  @ApiProperty({
    description: 'The password of the courseCommander',
    example: 'ABm12345678',
  })
  password: string;

  @ApiProperty({
    description: 'The base of the courseCommander',
    example: Bases.TECHNI,
  })
  base: Bases;
}
