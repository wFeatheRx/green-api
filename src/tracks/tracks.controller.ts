import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Track } from 'src/viewmodel/track';
import { TracksService } from './tracks.service';

@Controller('api/tracks')
export class TracksController {
  constructor(private readonly trackService: TracksService) {}

  @Post()
  insertOne(@Body() track: Track) {
    return this.trackService.insertOne(track);
  }
  @Post('/batch')
  insertMany(@Body() tracks: Track[]) {
    return this.trackService.insertMany(tracks);
  }
  @Get()
  findAll() {
    return this.trackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackService.findOne(id);
  }

  @Put('/counter')
  upsertCount(@Body() track: Track) {
    return this.trackService.upsertCount(track);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() track: Track) {
    return this.trackService.updateOne(id, track);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.trackService.deleteOne(id);
  }
}
