import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CreateUsersService } from 'src/Services/Users/create-users.service';
import { CreateUserDto } from 'src/Services/Users/dto/create-user.dto';
import { UpdateUserDto } from 'src/Services/Users/dto/update-user.dto';
import { ListUsersService } from 'src/Services/Users/list-users.service';
import { UpdateUsersService } from 'src/Services/Users/update-users.service';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/Services/Auth/guards/jwt-auth.guard';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private readonly _listUsersServiceRepository: ListUsersService,
    private readonly _createUsersServiceRepository: CreateUsersService,
    private readonly _updateUsersServiceRepository: UpdateUsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiOperation({ summary: 'Find all users' })
  @ApiOkResponse({
    description: 'Find all users',
    content: {
      'application/json': {
        example: [
          {
            id: 1,
            email: 'bruno@email.com',
            active: true,
            createdAt: '2024-01-21T13:05:29.581Z',
            updatedAt: '2024-01-21T13:05:29.581Z',
          },
          {
            id: 2,
            email: 'gabriel@email.com',
            active: true,
            createdAt: '2024-01-21T14:42:38.922Z',
            updatedAt: '2024-01-21T14:42:38.922Z',
          },
        ],
      },
    },
  })
  findAll() {
    return this._listUsersServiceRepository.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @ApiOperation({ summary: 'Find an user by id' })
  @ApiOkResponse({
    description: 'Find user by id',
    content: {
      'application/json': {
        example: {
          id: 1,
          email: 'bruno@email.com',
          active: true,
          createdAt: '2024-01-21T13:05:29.581Z',
          updatedAt: '2024-01-21T13:05:29.581Z',
        },
      },
    },
  })
  findOne(@Param('id') id: string) {
    return this._listUsersServiceRepository.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    description: 'Create new user',
    content: {
      'application/json': {
        example: {
          email: 'brunao@email.com',
          id: 1,
          active: true,
          createdAt: '2024-01-21T14:42:38.922Z',
          updatedAt: '2024-01-21T14:42:38.922Z',
        },
      },
    },
  })
  @ApiConflictResponse({
    description: 'There is already a registered user with this email.',
    content: {
      'application/json': {
        example: {
          path: '/users',
          timestamp: '2024-01-21T14:41:43.707Z',
          errorList: {
            message: 'There is already a registered user with this email.',
            error: 'Conflict',
            statusCode: 409,
          },
        },
      },
    },
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this._createUsersServiceRepository.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a user by id' })
  @ApiConflictResponse({
    description: 'There is already a registered user with this email.',
    content: {
      'application/json': {
        example: {
          path: '/users',
          timestamp: '2024-01-21T14:41:43.707Z',
          errorList: {
            message: 'There is already a registered user with this email.',
            error: 'Conflict',
            statusCode: 409,
          },
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Update user by id',
    content: {
      'application/json': {
        example: {
          id: 1,
          email: 'brunoupdate@email.com',
          active: true,
          createdAt: '2024-01-21T13:05:29.581Z',
          updatedAt: '2024-01-21T13:05:29.581Z',
        },
      },
    },
  })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this._updateUsersServiceRepository.update(+id, updateUserDto);
  }
}
