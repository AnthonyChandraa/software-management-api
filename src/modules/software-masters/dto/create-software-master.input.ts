import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSoftwareMasterInput {
  @Field(() => String, { nullable: false }) softwareId: string;
  @Field(() => String, { nullable: false }) masterId: string;
}
