/**
 * This file defines the input type for updating user details in GraphQL.
 * 
 * - `UpdateUserInput`: Allows updating fields of the `User` entity, identified by `uid`.
 */


import { InputType, PartialType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';

@InputType()
export class UpdateUserInput extends PartialType(User) {
  uid: User['uid'];
}
