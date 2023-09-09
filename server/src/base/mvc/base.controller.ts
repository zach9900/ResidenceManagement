import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseService } from './base.service';
import { GetBaseDto } from '@utils/dtos';
import { ApiTags } from '@nestjs/swagger';
import { AddBaseDto } from '@utils/add-base.dto';

@ApiTags('Base')
@Controller('base')
export class BaseController {
  constructor(private readonly baseService: BaseService) {}

  @Get('all')
  async findAll() {
    return await this.baseService.findAll();
  }

  @Get()
  async findOne(@Body() getBase: GetBaseDto) {
    return await this.baseService.findOne(getBase);
  }

  @Post()
  async create(@Body() addBase: AddBaseDto) {
    return await this.baseService.create(addBase);
  }

  @Patch('commander')
  async updateCommander(@Param('id') id: string, @Body() updateBaseDto: string) {
    return await this.baseService.updateBaseWithCommander(+id, updateBaseDto);
  }

  @Patch('hiltons')
  async updateHiltons() {
    return await this.baseService.updateBaseWithHiltons();
  }
}
