import { Injectable } from '@nestjs/common';
import { GetBaseDto } from '@utils/dtos';

@Injectable()
export class BaseService {
  create(createBaseDto: string) {
    return 'This action adds a new base';
  }

  findAll() {
    return `This action returns all base`;
  }

  findOne(getBase: GetBaseDto) {
    console.log(getBase); 
  }

  update(id: number, updateBaseDto: string) {
    return `This action updates a #${id} base`;
  }

  remove(id: number) {
    return `This action removes a #${id} base`;
  }
}
