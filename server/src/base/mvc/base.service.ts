import { Injectable } from '@nestjs/common';
import { GetBaseDto } from '@utils/dtos';

type CreateBaseDto = string;
type UpdateBaseDto = string;

@Injectable()
export class BaseService {
  create(createBaseDto: CreateBaseDto) {
    return 'This action adds a new base';
  }

  findAll() {
    return `This action returns all base`;
  }

  findOne(getBase: GetBaseDto) {
    
  }

  update(id: number, updateBaseDto: UpdateBaseDto) {
    return `This action updates a #${id} base`;
  }

  remove(id: number) {
    return `This action removes a #${id} base`;
  }
}
