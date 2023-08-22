import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

export type RoomDocument = Room & Document;

@Schema()
export class Room
{
    @Prop()
    roomNumber: number;

    @Prop()
    bedsNumber: number;

    @Prop()
    freeBeds: number;
    
    /*@Prop()
    soldiers: ObjectId*/
}

export const RoomSchema = SchemaFactory.createForClass(Room);