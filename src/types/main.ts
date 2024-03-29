export const enum RoleId {
  Admin = 1,
  DefaultUser = 2
}

export interface User {
  id: string
  name: string
  roleId: RoleId
  avatarId: number
  isActive: boolean
  basicAuthToken: string
  createdAt: string
  deletedAt: string
  updatedAt: string
}

export type UserId = User['id']

export interface UserInfo {
  id?: UserId
  name: User['name']
  password: string
  roleId?: RoleId
}

type Base64 = string

export interface Avatar {
  id: number
  userId: number
  avatarName: string
  avatarData: Base64
  size: number
  createdAt: string
  updatedAt: string
}

export interface AccountInfo {
  name: string
  password: string
}
