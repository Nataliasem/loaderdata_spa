export const BASE_URL = {
    HOST: 'http://localhost',
    PORT: '8080'
}

export const ROLES = {
    OWNER: {
        ID: 1,
        AUTHORITIES: ['manage_users', 'manage_settings', 'view_all_pages', 'view_some_pages']
    },
    ADMIN: {
        ID: 2,
        AUTHORITIES: ['manage_settings', 'view_all_pages', 'view_some_pages']
    },
    ADVANCED_USER: {
        ID: 3,
        AUTHORITIES: ['view_all_pages', 'view_some_pages']
    },
    DEFAULT_USER: {
        ID: 4,
        AUTHORITIES: ['view_some_pages']
    }
}
