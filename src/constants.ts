import { RoleId } from '~/types/main'

export const BASE_URL = {
  HOST: 'http://192.168.0.129',
  PORT: '8090'
}

export const ROLES = {
  ADMIN: {
    ID: RoleId.Admin,
    AUTHORITIES: [
      'manage_users',
      'manage_settings',
      'view_all_pages',
      'view_some_pages'
    ],
    NAME: 'Администратор'
  },
  DEFAULT_USER: {
    ID: RoleId.DefaultUser,
    AUTHORITIES: ['view_some_pages'],
    NAME: 'Пользователь'
  }
}
