import { CourseCommander } from "@utils/courseCommander.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Genders } from "src/utils/enums/genders.enum";

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

    /*@Prop()
    personalCommander:CourseCommander
    */
}

export const SoldierSchema = SchemaFactory.createForClass(Soldier);