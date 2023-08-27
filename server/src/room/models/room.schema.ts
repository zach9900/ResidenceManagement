import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Soldier } from "@utils/schemas";

export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Prop()
    roomNumber: number;

    @Prop()
    bedsNumber: number;

    @Prop()
    freeBeds: number;
    
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Soldier.name }] })
    soldiers: Soldier[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);