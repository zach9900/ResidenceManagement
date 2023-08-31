import { Module } from '@nestjs/common';
import { BaseController } from '.';
import { BaseService } from '.';

@Module({
  controllers: [BaseController],
  providers: [BaseService]
})
export class BaseModule {}
