import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Commander, GeoCoordinate, Hilton } from "@utils/schemas";
import mongoose, { Document } from "mongoose";

export type BaseDocument = Base & Document;

@Schema()
export class Base {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commander.name })
    baseCommander: Commander;

    @Prop()
    baseName: string;

    @Prop()
    geoCenter: GeoCoordinate;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Hilton.name }] })
    hiltons: Hilton[];
}

export const BaseSchema = SchemaFactory.createForClass(Base);