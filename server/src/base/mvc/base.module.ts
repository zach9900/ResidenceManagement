import { Module } from '@nestjs/common';
import { BaseController } from '.';
import { BaseService } from '.';
import { MongooseModule } from '@nestjs/mongoose';
import { Base, BaseSchema } from '@utils/base.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Base.name, schema: BaseSchema }])],
  controllers: [BaseController],
  providers: [BaseService],
  exports: [BaseService],
})
export class BaseModule {}
