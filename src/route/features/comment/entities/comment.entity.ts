import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Comment {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  idLecture: string;

  @Column()
  userCreated: string;

  @Column()
  content: string;

  @Column()
  userLiked: string[];
}
