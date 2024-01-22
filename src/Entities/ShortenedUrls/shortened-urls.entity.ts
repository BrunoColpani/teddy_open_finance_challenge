import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersModel } from '../Users/user.entity';

@Index('shortened_urls_pkey', ['id'], { unique: true })
@Index('shortened_urls_short_url_key', ['shortUrl'], { unique: true })
@Entity('shortened_urls', { schema: process.env.DATABASE_SCHEMA })
export class ShortenedUrlsModel {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'original_url' })
  originalUrl: string;

  @Column('character varying', { name: 'short_url', unique: true })
  shortUrl: string;

  @Column('integer', { name: 'click_count', default: () => '0' })
  clickCount: number;

  @Column('integer', { name: 'user_id' })
  userId: number;

  @Column('boolean', { name: 'active', default: () => 'true' })
  active: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'updated_at',
    default: () => 'now()',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamptz',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt: Date | null;

  @ManyToOne(() => UsersModel, (users) => users.shortenedUrls)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UsersModel;
}
