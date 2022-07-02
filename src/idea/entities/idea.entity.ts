import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Idea extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ name: 'title', type: 'varchar', length: 50 })
  title?: string;

  @Column({ name: 'hashtag', type: 'varchar', length: 20 })
  hashtag?: string;

  @Column({ name: 'idea', type: 'varchar', length: 255 })
  idea: string;

  @Column({ name: 'votes', type: 'int' })
  votes: number;

  @Column({ name: 'status', type: 'varchar', length: 25 })
  status: string;
}
