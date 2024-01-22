import { DataSource } from 'typeorm';
import { UsersModel } from './user.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsersModel),
    inject: ['DATA_SOURCE'],
  },
];
