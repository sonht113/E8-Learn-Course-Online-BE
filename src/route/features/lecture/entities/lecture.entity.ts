import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Lecture {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  id_course: string;

  @Column()
  id_chapter: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url_video: string;

  @Column()
  id_comment: string[];
}
