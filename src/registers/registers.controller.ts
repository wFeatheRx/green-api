import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
 
import { Register } from 'src/viewmodel/register';
import { RegistersService } from './registers.service';

@Controller('api/registers')
export class RegistersController {
  constructor(private readonly registerService: RegistersService) {}

 
  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':phone')
  findOne(@Param('phone') phone: string) {
    return this.registerService.findOne(phone);
  }

  @Put()
  replaceOne(@Body() register: Register) {
    return this.registerService.replaceOne(register);
  }


  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.registerService.deleteOne(id);
  }
}
