import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ManagerDocument = Manager & Document;

@Schema()
export class Manager {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    personalNumber: string;

    @Prop()
    password: string;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);