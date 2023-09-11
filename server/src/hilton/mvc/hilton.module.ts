import { Module } from "@nestjs/common";
import { HiltonService } from "./hilton.service";
import { HiltonController } from "./hilton.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Hilton, HiltonSchema } from "@utils/hilton.schema";
import { FloorModule } from "@modules/floor.module";
import { CommanderModule } from "src/commander/mvc/commander.module";
import { IsValidGenderConstraint } from "@utils/decorators";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Hilton.name, schema: HiltonSchema }]),
        FloorModule,
        CommanderModule,
    ],
    providers: [HiltonService, IsValidGenderConstraint],
    controllers: [HiltonController],
})

export class HiltonModule {};