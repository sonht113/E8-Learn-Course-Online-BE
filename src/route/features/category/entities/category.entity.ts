import { Entity, PrimaryColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Category {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  totalCourse: number;
}
