/**
 * This file defines arguments for querying users in GraphQL.
 * 
 * - `FindManyUserArgsStrict`: Arguments for querying many users, including filtering, sorting, pagination, and uniqueness.
 * - `FindManyUserArgs`: Flexible version of the query arguments where all fields are optional.
 * - `FindUniqueUserArgs`: Arguments for querying a single user by their unique fields, like `uid`.
 */


import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserOrderByWithRelationInput } from './order-by.args';
import { UserWhereInput, UserWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
});

@ArgsType()
class FindManyUserArgsStrict
  implements
    RestrictProperties<
      FindManyUserArgsStrict,
      Omit<Prisma.UserFindManyArgs, 'include' | 'select'>
    >
{
  where: UserWhereInput;
  orderBy: UserOrderByWithRelationInput[];
  cursor: UserWhereUniqueInput;
  take: number;
  skip: number;
  @Field(() => [Prisma.UserScalarFieldEnum])
  distinct: Prisma.UserScalarFieldEnum[];
}

@ArgsType()
export class FindManyUserArgs extends PartialType(FindManyUserArgsStrict) {}

@ArgsType()
export class FindUniqueUserArgs {
  where: UserWhereUniqueInput;
}
