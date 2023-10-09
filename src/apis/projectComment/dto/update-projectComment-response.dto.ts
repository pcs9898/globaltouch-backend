import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateProjectCommentResponseDTO {
  @Field(() => Boolean)
  success: boolean;
}
