/**
 * This file defines GraphQL object types for the `User` and `AuthProvider` entities.
 * 
 * - `User`: Represents a user in the system, with fields such as `uid`, `createdAt`, `name`, and `image`.
 * - `AuthProvider`: Represents the authentication provider for a user, including the type (e.g., Google, email/password).
 * - Uses `RestrictProperties` to ensure compatibility with the Prisma `User` type while excluding certain fields.
 */

import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, User as UserType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field({ nullable: true })
  image: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  name: string;

  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class AuthProvider {
  uid: string;
  @Field(() => $Enums.AuthProviderType)
  type: $Enums.AuthProviderType;
}
