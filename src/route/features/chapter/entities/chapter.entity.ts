import { Entity, ObjectIdColumn, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Chapter {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  course: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
