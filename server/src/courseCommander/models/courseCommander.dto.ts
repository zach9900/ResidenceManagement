import { ApiProperty } from '@nestjs/swagger';
import { ApiSchema } from '@utils/decorators';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

@ApiSchema({ name: 'CourseCommander' })
export class CourseCommanderDto {
  @ApiProperty({
    description: 'The first name of the commander',
    example: 'john',
  })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({
    description: 'The last name of the commander',
    example: 'doe',
  })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({
    description: 'The personalNumber of the commander',
    example: '1111111',
  })
  @IsNotEmpty()
  @IsNumberString()
  personalNumber: string;

  @ApiProperty({
    description: 'The name of the gaf of commander',
    example: 'tikshuv',
  })
  @IsNotEmpty()
  @IsString()
  gaf: string;

  @ApiProperty({
    description: 'The course number of the commander',
    example: '1400',
  })
  @IsNotEmpty()
  @IsString()
  course: string;

  @ApiProperty({
    description: 'The phoneNumber of the commander',
    example: '0123456789',
  })
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;
}
