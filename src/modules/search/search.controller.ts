import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get(':key')
  @ApiParam({ name: 'key', description: `key search`, required: true, type: String })
  findAll(@Param('key') key) {
   return this.searchService.searchGoogle(key)
  }
}