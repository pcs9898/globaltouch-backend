import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { CountryCode } from '../countryCode/entity/countryCode.entity';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '../common/common.module';
import { CountryCodeModule } from '../countryCode/countryCode.module';
import { ProjectDonation } from '../projectDonation/entity/projectDonation.entity';
import { Project } from '../project/entity/project.entity';
import { ProjectDonationModule } from '../projectDonation/projectDonation.module';
import { ProjectModule } from '../project/project.module';
import { ProjectComment } from '../projectComment/entity/projectComment.entity';
import { ProjectCommentModule } from '../projectComment/projectComment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      CountryCode,
      ProjectDonation,
      Project,
      ProjectComment,
    ]),
    AuthModule,
    CommonModule,
    CountryCodeModule,
    ProjectDonationModule,
    ProjectModule,
    ProjectCommentModule,
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
