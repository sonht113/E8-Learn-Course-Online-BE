import {
  Column,
  Entity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Course {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  categories: string[];

  @Column()
  title: string;

  @Column()
  totalChapter: number;

  @Column()
  totalLecture: number;

  @Column()
  description: string;

  @Column()
  isFree: boolean;

  @Column()
  price: string;

  @Column()
  thumbnail: string;

  @Column()
  totalView: number;

  @Column()
  totalLike: number;

  @Column()
  totalDislike: number;

  @Column()
  tags: string[];

  @Column()
  isPrivate: boolean;

  @Column()
  usersJoined: string[];

  @Column()
  userCreated: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
