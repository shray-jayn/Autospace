/**
 * This file contains common Data Transfer Objects (DTOs) used for handling query parameters 
 * and validation in API requests.
 * 
 * - `BaseQueryDto`: Defines the structure for pagination and filtering query parameters
 *    with validation rules applied using `class-validator`.
 *    Fields include `skip`, `take`, `search`, and `order`.
 */


import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator';

export class BaseQueryDto {
  @IsNumberString()
  @IsOptional()
  skip?: number;

  @IsNumberString()
  @IsOptional()
  take?: number;

  @IsString()
  @IsOptional()
  search?: string;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc';
}
