export const BASE_URL = {
  HOST: 'http://localhost',
  PORT: '8090'
}

export const ROLES = {
  ADMIN: {
    ID: 1,
    AUTHORITIES: [
      'manage_users',
      'manage_settings',
      'view_all_pages',
      'view_some_pages'
    ],
    NAME: 'Администратор'
  },
  DEFAULT_USER: {
    ID: 2,
    AUTHORITIES: ['view_some_pages'],
    NAME: 'Пользователь'
  }
}
