/**
 * This file defines the DTO for querying users.
 * 
 * - Extends `BaseQueryDto` and adds `sortBy` and `searchBy` for sorting and searching.
 * - Validates the fields using `class-validator`.
 */

import { IsIn, IsOptional } from 'class-validator';
import { Prisma } from '@prisma/client';
import { BaseQueryDto } from 'src/common/dtos/common.dto';

export class UserQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  sortBy?: string;

  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  searchBy?: string;
}
