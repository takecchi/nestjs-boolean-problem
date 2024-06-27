import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

class Something {
  @ApiProperty({
    type: 'boolean',
  })
  @IsBoolean()
  is_banana: boolean;

  @ApiProperty({
    type: 'boolean',
  })
  @IsBoolean()
  is_apple: boolean;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
    description: 'ファイル(複数可)',
    required: false,
  })
  @IsOptional()
  // For Swagger definition. Please receive it in the controller.
  files: undefined[];
}

@Controller()
export class AppController {
  constructor() {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files', maxCount: 10 }]))
  @ApiBody({
    type: Something,
  })
  post(
    @Body() body: Something,
    @UploadedFiles() files: Express.Multer.File[],
  ): Something {
    console.log(body);
    console.log(files);
    return body;
  }
}
