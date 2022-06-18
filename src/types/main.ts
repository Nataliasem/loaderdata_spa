type RoleId = 1 | 2 | 3

export interface User {
  id: string
  username: string
  roleId: RoleId
  isActive: boolean
}
