import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseCommanderDocument = CourseCommander & Document;

@Schema()
export class CourseCommander {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  personalNumber: string;

  @Prop()
  gaf: string;

  @Prop()
  course: string;

  @Prop()
  phoneNumber: string;
}

export const CourseCommanderSchema = SchemaFactory.createForClass(CourseCommander);
