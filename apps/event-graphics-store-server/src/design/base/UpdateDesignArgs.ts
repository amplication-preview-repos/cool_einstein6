/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DesignWhereUniqueInput } from "./DesignWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DesignUpdateInput } from "./DesignUpdateInput";

@ArgsType()
class UpdateDesignArgs {
  @ApiProperty({
    required: true,
    type: () => DesignWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DesignWhereUniqueInput)
  @Field(() => DesignWhereUniqueInput, { nullable: false })
  where!: DesignWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DesignUpdateInput,
  })
  @ValidateNested()
  @Type(() => DesignUpdateInput)
  @Field(() => DesignUpdateInput, { nullable: false })
  data!: DesignUpdateInput;
}

export { UpdateDesignArgs as UpdateDesignArgs };
