import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Commander, CommanderSchema } from "@utils/commander.schema";
import { CommanderController } from "./commander.controller";
import { CommanderService } from "./commander.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Commander.name, schema: CommanderSchema }])],
    controllers: [CommanderController],
    providers: [CommanderService],
    exports: [CommanderService],
})
export class CommanderModule {}