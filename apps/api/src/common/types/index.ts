/**
 * This file defines common types used across the application for handling 
 * user roles and user data.
 * 
 * - `Role`: Enum-like type representing user roles (admin, manager, valet).
 * - `GetUserType`: Represents the structure of the authenticated user object, 
 *    containing the user's unique ID (`uid`) and an array of roles.
 */

export type Role = 'admin' | 'manager' | 'valet';

export type GetUserType = {
  uid: string;
  roles: Role[];
};
