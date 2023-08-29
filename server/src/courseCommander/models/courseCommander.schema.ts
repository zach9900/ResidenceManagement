import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Courses, Gafs } from '@utils/enums';
import { Base, Soldier } from '@utils/schemas';

export type CourseCommanderDocument = CourseCommander & Document;

@Schema()
export class CourseCommander {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  gaf: Gafs;

  @Prop()
  course: Courses;

  @Prop()
  personalNumber: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Soldier.name }] })
  soldiers: Soldier[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Base.name })
  base: Base;
}

export const CourseCommanderSchema = SchemaFactory.createForClass(CourseCommander);
