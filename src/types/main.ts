enum RoleId {
  ADMIN = 1,
  DEFAULT_USER = 2
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
