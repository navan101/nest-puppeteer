import { Controller, Get, Param } from '@nestjs/common';
import { CheckService } from './check.service';
import { ApiParam } from '@nestjs/swagger';

@Controller('check')
export class CheckController {
  constructor(private checkService: CheckService) {}

  @Get(':url')
  @ApiParam({ name: 'url', description: `check price`, required: true, type: String })
  findAll(@Param('url') url) {
   return this.checkService.checkPrice(url)
  }
}