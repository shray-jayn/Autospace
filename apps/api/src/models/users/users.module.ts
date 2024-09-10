/**
 * This file defines the UsersModule, which bundles together the user-related components 
 * (service, GraphQL resolver, and REST controller) into a cohesive unit.
 * 
 * - `UsersService`: Provides the business logic for managing users.
 * - `UsersResolver`: Handles GraphQL queries and mutations related to users.
 * - `UsersController`: Handles HTTP REST requests related to users.
 * 
 * This module makes `UsersService` available for use in other modules.
 */

import { Module } from '@nestjs/common';
import { UsersService } from './graphql/users.service';
import { UsersResolver } from './graphql/users.resolver';
import { UsersController } from './rest/users.controller';

@Module({
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
