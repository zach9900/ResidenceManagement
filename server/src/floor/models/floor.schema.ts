import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

export type FloorDocument = Floor & Document;

@Schema()
export class Floor
{
    /*@Prop()
    floorManager: ObjectId;*/

    @Prop()
    floorNumber: number;

    /*@Prop()
    rooms: ObjectId[];*/
}

export const FloorSchema = SchemaFactory.createForClass(Floor);