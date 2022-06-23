export const enum RoleId {
  Admin = 1,
  DefaultUser = 2
}

// TODO: новые поля с бэка
export interface User {
  id: string
  username: string
  roleId: RoleId
  isActive: boolean
  basicAuthToken: string
  createdAt: string
  deletedAt: string
  updatedAt: string
}
