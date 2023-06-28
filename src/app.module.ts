import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './route/features/lesson/lesson.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Student } from './route/features/student/student.entity';
import { User } from './route/features/user/entities/user.entity';
import { RouteModule } from './route/route.module';
import { Banner } from './route/features/banner/entities/banner.entity';
import { Course } from './route/features/course/entities/course.entity';

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
      entities: [Lesson, Student, User, Banner, Course],
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
