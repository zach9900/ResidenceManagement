import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Commander, Room } from "@utils/schemas";

export type FloorDocument = Floor & Document;

@Schema()
export class Floor {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commander.name })
    floorManager: Commander;

    @Prop()
    floorNumber: number;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Room.name }] })
    rooms: Room[];
}

export const FloorSchema = SchemaFactory.createForClass(Floor);