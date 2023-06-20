import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  fullname: string;

  @Column()
  description: string;

  @Column()
  phone: string;

  @Column()
  avatar: string;

  @Column()
  role: string;

  @Column()
  myFavoriteCourses: string[];

  @Column()
  myLearningCourses: string[];

  @Column()
  myCourses: string[];

  @Column()
  myBlogs: string[];

  @Column()
  myFavoriteBlogs: string[];
}
