import { Prop, Schema } from "@nestjs/mongoose";

@Schema({
    autoCreate: false
})
export class GeoCoordinate {
    @Prop()
    latitude: number;

    @Prop()
    longitude: number;
}