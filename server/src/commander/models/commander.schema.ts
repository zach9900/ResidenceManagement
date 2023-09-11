import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Genders, Roles } from "@utils/enums";
import { Document } from "mongoose";

export type CommanderDocument = Commander & Document;

@Schema()
export class Commander {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    gender: Genders;

    @Prop()
    personalNumber: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    password: string;

    @Prop()
    role: Roles;
}

export const CommanderSchema = SchemaFactory.createForClass(Commander);