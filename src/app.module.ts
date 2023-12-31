import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './route/features/user/entities/user.entity';
import { RouteModule } from './route/route.module';
import { Banner } from './route/features/banner/entities/banner.entity';
import { Course } from './route/features/course/entities/course.entity';
import { Category } from './route/features/category/entities/category.entity';
import { Chapter } from './route/features/chapter/entities/chapter.entity';
import { Lecture } from './route/features/lecture/entities/lecture.entity';
import { Comment } from './route/features/comment/entities/comment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URI,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [User, Banner, Course, Category, Chapter, Lecture, Comment],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService) => {
        const playground = configService.get('GRAPHQL_PLAYGROUND');
        const introspection = configService.get('GRAPHQL_INTROSPECTION');
        return {
          autoSchemaFile: './src/@generated/schema.graphql',
          sortSchema: true,
          playground: playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    RouteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
