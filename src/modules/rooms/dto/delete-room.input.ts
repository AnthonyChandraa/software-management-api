import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DeleteRoomInput {
  @Field(() => String, { nullable: false }) id: string;
}