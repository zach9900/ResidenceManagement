import { Module } from "@nestjs/common";
import { HiltonService } from "./hilton.service";
import { HiltonController } from "./hilton.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Hilton, HiltonSchema } from "@utils/hilton.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Hilton.name, schema: HiltonSchema }])],
    providers: [HiltonService],
    controllers: [HiltonController],
})

export class HiltonModule {};