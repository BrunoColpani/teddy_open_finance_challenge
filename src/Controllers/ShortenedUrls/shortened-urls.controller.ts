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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Services/Auth/guards/jwt-auth.guard';
import { CreateShortenedUrlsService } from 'src/Services/ShortenedUrls/create-shortened-urls.service';
import { DeleteShortenedUrlsService } from 'src/Services/ShortenedUrls/delete-shortened-urls.service';
import { CreateShortenedUrlsDto } from 'src/Services/ShortenedUrls/dto/create-shortened-urls.dto';
import { UpdateShortenedUrlsDto } from 'src/Services/ShortenedUrls/dto/update-shortened-urls.dto';
import { ListShortenedUrlsService } from 'src/Services/ShortenedUrls/list-shortened-urls.service';
import { UpdatetShortenedUrlsService } from 'src/Services/ShortenedUrls/update-shortened-urls.service';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('')
@ApiTags('Shortened Urls')
export class ShortenedUrlsController {
  constructor(
    private readonly _listShortenedUrlsService: ListShortenedUrlsService,
    private readonly _createShortenedUrlsService: CreateShortenedUrlsService,
    private readonly _updatetShortenedUrlsService: UpdatetShortenedUrlsService,
    private readonly __deleteShortenedUrlsService: DeleteShortenedUrlsService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get(':shortUrl')
  @ApiOperation({ summary: 'Returns the URL for redirection' })
  @ApiOkResponse({
    description: 'Find shortened URL by shortUrl',
    content: {
      'application/json': {
        example: {
          url: 'www.google.com',
        },
      },
    },
  })
  async redirect(@Param('shortUrl') shortUrl: string) {
    return await this._listShortenedUrlsService.redirect(shortUrl);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @Get('user-urls/:userId')
  @ApiOperation({ summary: 'Returns all URLs by user' })
  @ApiOkResponse({
    description: 'Find all shortened URL by user',
    content: {
      'application/json': {
        example: [
          {
            id: 1,
            originalUrl: 'www.google.com',
            shortUrl: 'http://localhost:8080/avwAb8',
            clickCount: 6,
            updatedAt: '2024-01-21T14:56:35.867Z',
          },
          {
            id: 2,
            originalUrl: 'www.facebook.com',
            shortUrl: 'http://localhost:8080/avx4b8',
            clickCount: 6,
            updatedAt: '2024-01-21T14:52:35.867Z',
          },
        ],
      },
    },
  })
  async findByUserId(@Param('userId') userId: number) {
    return await this._listShortenedUrlsService.findByUserId(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @ApiOperation({ summary: 'Create a new shortened url' })
  @ApiCreatedResponse({
    description: 'Create new shortened url',
    content: {
      'application/json': {
        example: {
          shortUrl: 'http://localhost:8080/avwAb8',
        },
      },
    },
  })
  async shortenUrl(
    @Body() createShortenedUrlsDto: CreateShortenedUrlsDto,
    @Request() req,
  ) {
    return await this._createShortenedUrlsService.create(
      createShortenedUrlsDto,
      req.userId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update shortened url by id' })
  @ApiOkResponse({
    description: 'Update shortened url by id',
    content: {
      'application/json': {
        example: {
          id: 3,
          originalUrl: 'www.googlex.com',
          shortUrl: 'http://localhost:8080/avwAb8',
          clickCount: 6,
          updatedAt: '2024-01-21T14:56:35.867Z',
        },
      },
    },
  })
  @Put(':id')
  @ApiOperation({ summary: 'Update shortened url by id' })
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
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiNoContentResponse({
    description: 'Remove shortened url by id',
  })
  @ApiOperation({ summary: 'Delete shortened url by id' })
  remove(@Param('id') id: number, @Request() req) {
    return this.__deleteShortenedUrlsService.remove(id, req.user.userId);
  }
}
