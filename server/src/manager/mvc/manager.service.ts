import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GetManagerDto } from '@utils/get-manager.dto';
import { Manager, ManagerDocument } from '@utils/manager.schema';
import { Model } from 'mongoose';
import { AddManagerDto } from '../models/add-manager.dto';
import { UpdateManagerDto } from '@utils/update-manager.dto';

@Injectable()
export class ManagerService {
    constructor(@InjectModel(Manager.name) private readonly managerModel: Model<ManagerDocument>) { }

    async getManager(managerNumber: string) {
        const manager = await this.managerModel.findOne(
            { personalNumber: managerNumber },
        ).exec();

        return manager;
    }


    async addManager(manager: AddManagerDto) {
        const newManager = new this.managerModel({
            firstName: manager.firstName,
            lastName: manager.lastName,
            phoneNumber: manager.phoneNumber,
            personalNumber: manager.personalNumber,
            password: manager.password
        });

        return await newManager.save();
    }

    async updateManager(manager: UpdateManagerDto) {
        const managerToUpdate = await this.getManager(manager.personalNumber);
        managerToUpdate.password = manager.password;

        return await managerToUpdate.save();
    }

    async getManagerAndDelete(manager: GetManagerDto) {
        return await this.managerModel.deleteOne({
            personalNumber: manager.personalNumber,
        }).exec();
    }

}