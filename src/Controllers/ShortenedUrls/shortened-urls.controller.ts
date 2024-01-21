import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Services/Auth/guards/jwt-auth.guard';
import { CreateShortenedUrlsService } from 'src/Services/ShortenedUrls/create-shortened-urls.service';
import { DeleteShortenedUrlsService } from 'src/Services/ShortenedUrls/delete-shortened-urls.service';
import { CreateShortenedUrlsDto } from 'src/Services/ShortenedUrls/dto/create-shortened-urls.dto';
import { UpdateShortenedUrlsDto } from 'src/Services/ShortenedUrls/dto/update-shortened-urls.dto';
import { ListShortenedUrlsService } from 'src/Services/ShortenedUrls/list-shortened-urls.service';
import { UpdatetShortenedUrlsService } from 'src/Services/ShortenedUrls/update-shortened-urls.service';

@Controller('')
export class ShortenedUrlsController {
  constructor(
    private readonly _listShortenedUrlsService: ListShortenedUrlsService,
    private readonly _createShortenedUrlsService: CreateShortenedUrlsService,
    private readonly _updatetShortenedUrlsService: UpdatetShortenedUrlsService,
    private readonly __deleteShortenedUrlsService: DeleteShortenedUrlsService,
  ) {}

  @Get(':shortUrl')
  redirect(@Param('shortUrl') shortUrl: string) {
    return this._listShortenedUrlsService.redirect(shortUrl);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id') id: number) {
    return this._listShortenedUrlsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-urls/:userId')
  async findByUserId(@Param('userId') userId: number) {
    return await this._listShortenedUrlsService.findByUserId(userId);
  }

  @Post('')
  async shortenUrl(
    @Body() createShortenedUrlsDto: CreateShortenedUrlsDto,
    @Request() req,
  ) {
    const shortUrl = await this._createShortenedUrlsService.create(
      createShortenedUrlsDto,
      req.userId,
    );
    return { shortUrl };
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateShortenedUrlsDto: UpdateShortenedUrlsDto,
    @Request() req,
  ) {
    return this._updatetShortenedUrlsService.update(
      +id,
      updateShortenedUrlsDto,
      req.user.userId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number, @Request() req) {
    return this.__deleteShortenedUrlsService.remove(id, req.user.userId);
  }
}
