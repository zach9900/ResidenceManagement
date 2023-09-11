import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddBaseDto } from '@utils/add-base.dto';
import { Base, BaseDocument } from '@utils/base.schema';
import { GetBaseDto } from '@utils/dtos';
import { Bases } from '@utils/enums/bases.enum';
import { Model } from 'mongoose';

@Injectable()
export class BaseService {
  constructor(@InjectModel(Base.name) private readonly baseModel: Model<BaseDocument>) {}

  async findAll() {
    return await this.baseModel.find().exec();
  }

  async findOne(getBase: GetBaseDto) {
    const base = await this.baseModel.findOne(
      { baseName: getBase.baseName },
    ).exec();
    return base;
  }

  async findBase(getBase: Bases) {
    const base = await this.baseModel.findOne(
      { baseName: getBase },
    ).exec();
    return base;
  }

  async create(addBase: AddBaseDto) {
    const newBase = await new this.baseModel({
      baseName: addBase.baseName,
      geoCenter: addBase.geoCenter,
    });

    return await newBase.save();
  }

  async updateBaseWithCommander(id: number, updateBaseDto: string) {
    return `This action updates a #${id} base`;
  }

  async updateBaseWithHiltons() {

  }
}
