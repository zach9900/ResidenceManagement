import { CourseCommander } from "@modules/models/courseCommander.dto";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Genders } from "src/utils/enums/genders.enum";

export type HiltonDocument = Hilton & Document;

@Schema()
export class Hilton {
    /*@Prop()
    buildingManager: string;*/

    @Prop()
    allowedGender: Genders;

    @Prop()
    buildingNumber: number;

    /*@Prop()
    floors*/
}

export const HiltonSchema = SchemaFactory.createForClass(Hilton);