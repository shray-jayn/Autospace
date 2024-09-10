/**
 * This file defines the DTO for creating a new user.
 * 
 * - Inherits fields `uid` and `name` from `UserEntity` using PickType.
 * - Used for REST API requests to create new users.
 */

import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../entity/user.entity';

export class CreateUser extends PickType(UserEntity, ['uid', 'name']) {}
