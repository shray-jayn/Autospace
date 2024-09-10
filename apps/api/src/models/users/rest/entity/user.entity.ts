/**
 * This file defines the UserEntity class, which represents the structure of the user object.
 * 
 * - Implements the structure of the Prisma `User` model.
 * - Validates fields such as `uid`, `name`, and `image`.
 * - Used as a reference for DTOs and responses in the Users API.
 */

import { User } from '@prisma/client';
import { IsOptional } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class UserEntity implements RestrictProperties<UserEntity, User> {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  @IsOptional()
  name: string;
  @IsOptional()
  image: string;
}
