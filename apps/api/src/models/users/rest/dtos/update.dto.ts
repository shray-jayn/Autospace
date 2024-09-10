/**
 * This file defines the DTO for updating user details.
 * 
 * - Extends `CreateUser` with `PartialType`, marking all fields as optional.
 * - Requires the `uid` field to identify the user to update.
 */

import { PartialType } from '@nestjs/swagger';
import { CreateUser } from './create.dto';
import { User } from '@prisma/client';

export class UpdateUser extends PartialType(CreateUser) {
  uid: User['uid'];
}
