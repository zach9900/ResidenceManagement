import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CommanderService } from "./commander.service";
import { GetCommanderDto } from "@utils/get-commander.dto";
import { AddCommanderDto } from "@utils/add-commander.dto";

@ApiTags('Commander')
@Controller('commander')
export class CommanderController {
    constructor(private readonly commanderService: CommanderService) {}

    @Get()
    async readCommander(@Body() commander: GetCommanderDto) {
        return await this.commanderService.getCommander(commander);
    }

    @Post()
    async createCommander(@Body() commander: AddCommanderDto) {
        return await this.commanderService.createCommander(commander);
    }
}