import { ApiProperty } from '@nestjs/swagger';
import { ApiSchema } from '@utils/decorators';

@ApiSchema({ name: 'CourseCommander' })
export class CourseCommanderDto {
  @ApiProperty({
    description: 'The first name of the commander',
    example: 'john',
  })
  firstname: string;

  @ApiProperty({
    description: 'The last name of the commander',
    example: 'doe',
  })
  lastname: string;

  @ApiProperty({
    description: 'The personalNumber of the commander',
    example: '1111111',
  })
  personalNumber: string;

  @ApiProperty({
    description: 'The name of the gaf of commander',
    example: 'tikshuv',
  })
  gaf: string;

  @ApiProperty({
    description: 'The course number of the commander',
    example: '1400',
  })
  course: string;

  @ApiProperty({
    description: 'The phoneNumber of the commander',
    example: '0123456789',
  })
  phoneNumber: string;
}
