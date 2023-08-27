import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Genders } from "@utils/enums";
import { Commander, Floor, GeoCoordinate } from "@utils/schemas";

export type HiltonDocument = Hilton & Document;

@Schema()
export class Hilton {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commander.name })
    buildingManager: Commander;

    @Prop()
    allowedGender: Genders;

    @Prop()
    buildingNumber: number;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Floor.name }] })
    floors: Floor[];

    geoCenter: GeoCoordinate;
}

export const HiltonSchema = SchemaFactory.createForClass(Hilton);