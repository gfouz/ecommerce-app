import { z } from 'zod';
import { User, UserList } from '@/schemas/user.schema';

export const RoleUsersSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  users: z.array(
    z.object({
      name: z.string(),
      email: z.string().email('invalid email'),
    }),
  ),
});

export const RoleSchema = z.object({
  name: z.string().min(1, 'A name is required'),
});

export type Role = z.infer<typeof RoleSchema>;

export interface RoleInput extends Role {
  id: string;
}

export type RoleState = {
  roles: RoleInput[];
};
export type RoleList = {
  roles: Role[];
};
