import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Courses, Gafs, Genders } from '@utils/enums';
import { Base, CourseCommander } from '@utils/schemas';

export type SoldierDocument = Soldier & Document;

@Schema()
export class Soldier {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  gender: Genders;

  @Prop()
  personalNumber: string;

  @Prop()
  course: Courses;

  @Prop()
  gaf: Gafs;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CourseCommander.name })
  personalCommander: CourseCommander;

  @Prop()
  hiltonNumber: number;

  @Prop()
  roomNumber: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Base.name })
  base: Base;
}

export const SoldierSchema = SchemaFactory.createForClass(Soldier);
