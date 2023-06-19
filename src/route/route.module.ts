import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [AuthModule, CommonModule, FeaturesModule],
})
export class RouteModule {}
