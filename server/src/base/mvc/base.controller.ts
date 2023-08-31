import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseService } from './base.service';
import { GetBaseDto } from '@utils/dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Base')
@Controller('base')
export class BaseController {
  constructor(private readonly baseService: BaseService) {}

  @Post()
  create(@Body() createBaseDto: string) {
    return this.baseService.create(createBaseDto);
  }

  @Get('all')
  findAll() {
    return this.baseService.findAll();
  }

  @Get()
  findOne(@Body() getBase: GetBaseDto) {
    return this.baseService.findOne(getBase);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseDto: string) {
    return this.baseService.update(+id, updateBaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseService.remove(+id);
  }
}
