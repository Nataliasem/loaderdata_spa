export const enum RoleId {
  Admin = 1,
  DefaultUser = 2
}

enum adminAuthorities {
  MANAGE_USERS,
  MANAGE_SETTINGS,
  MANAGE_SELF
}

enum userAuthorities {
  MANAGE_SELF
}

export interface User {
  id: string
  name: string
  roleId: RoleId
  avatarId: number
  isActive: boolean
  basicAuthToken: string
  authorities: adminAuthorities[] | userAuthorities[]
  createdAt: string
  deletedAt: string
  updatedAt: string
}

export type UserId = User['id']

export interface UserInfo {
  id?: User['id']
  name: User['name']
  password: string
  roleId: RoleId
}
