import { Field, InputType, PickType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserDTO extends PickType(
  User,
  ['email', 'name'] as const,
  InputType,
) {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  password: string;
}
