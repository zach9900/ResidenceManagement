import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { AddCommanderDto } from "@utils/add-commander.dto";
import { BuildingManagerDto } from "@utils/building-manager.dto";
import { Commander, CommanderDocument } from "@utils/commander.schema";
import { Roles } from "@utils/enums";
import { FloorManagerDto } from "@utils/floor-manager.dto";
import { GetCommanderDto } from "@utils/get-commander.dto";
import { Model } from "mongoose";

@Injectable()
export class CommanderService {
    constructor(@InjectModel(Commander.name) private readonly commanderModel: Model<CommanderDocument>) {}

    async getCommander(commander: GetCommanderDto) {
        const wantedCommander = await this.commanderModel.findOne(
            { personalNumber: commander.personalNumber }
        ).exec();

        return wantedCommander;
    }

    async createCommander(commander: AddCommanderDto) {
        const newCommander = new this.commanderModel({
            firstName: commander.firstName,
            lastName: commander.lastName,
            gender: commander.gender,
            personalNumber: commander.personalNumber,
            phoneNumber: commander.phoneNumber,
            password: commander.password,
        });

        return await newCommander.save();
    }

    async createFloorManager(floorManager: FloorManagerDto) {
        const newFloorManager = new this.commanderModel({
            firstName: floorManager.firstName,
            lastName: floorManager.lastName,
            gender: floorManager.gender,
            personalNumber: floorManager.personalNumber,
            phoneNumber: floorManager.phoneNumber,
            role: Roles.FloorManager,
        });

        return await newFloorManager.save();
    }

    async createBuildingManager(buildingManager: BuildingManagerDto) {
        const newBuildingManager = new this.commanderModel({
            firstName: buildingManager.firstName,
            lastName: buildingManager.lastName,
            gender: buildingManager.gender,
            personalNumber: buildingManager.personalNumber,
            phoneNumber: buildingManager.phoneNumber,
            role: Roles.HiltonManager,
        })

        return await newBuildingManager.save();
    }
}