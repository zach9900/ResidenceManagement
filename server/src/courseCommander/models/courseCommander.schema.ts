import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CourseCommanderDocument {
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

export const CourseCommanderSchema = SchemaFactory.createForClass(
  CourseCommanderDocument,
);
