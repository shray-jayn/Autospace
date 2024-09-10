/**
 * This file defines input types for creating a user in GraphQL.
 * 
 * - `RegisterWithProviderInput`: For registering a user using an external authentication provider.
 * - `RegisterWithCredentialsInput`: For registering a user using email and password.
 * - `LoginInput`: For logging in with email and password.
 * - `LoginOutput`: Defines the structure of the response after logging in, including the token and user information.
 */

import {
  Field,
  InputType,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { AuthProviderType } from '@prisma/client';

registerEnumType(AuthProviderType, {
  name: 'AuthProviderType',
});

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['uid', 'name', 'image'],
  InputType,
) {
  @Field(() => AuthProviderType)
  type: AuthProviderType;
}

@InputType()
export class RegisterWithCredentialsInput extends PickType(
  User,
  ['name', 'image'],
  InputType,
) {
  email: string;
  password: string;
}

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialsInput, [
  'email',
  'password',
]) {}

@ObjectType()
export class LoginOutput {
  token: string;
  user: User;
}
