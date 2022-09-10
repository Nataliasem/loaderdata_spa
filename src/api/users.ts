// TODO: http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/

import axiosInstance from '~/plugins/axios'
import { User, UserId, UserInfo } from '~/types/main'
import { AxiosResponse } from 'axios'

export type SortColumn = 'id' | 'roleId' | 'name'
export type SortDirection = 'asc' | 'desc'

export interface ApiParams {
  limit: number
  offset: number
  active?: boolean
  name?: string
  sortColumn?: SortColumn
  sortDirection?: SortDirection
}

const DEFAULT_LIMIT = 15
const DEFAULT_OFFSET = 0

const defaultApiParams: ApiParams = {
  limit: DEFAULT_LIMIT,
  offset: DEFAULT_OFFSET
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

export default {
  loadUsersPaginated(params: ApiParams = defaultApiParams): Promise<User[]> {
    return axiosInstance
      .get('/api/users', { params })
      .then((response: AxiosResponse) => response.data)
      .then((response: Array<User>) => response)
  },

  loadUser(id: UserId): Promise<User> {
    return axiosInstance
      .get(`/api/users/${id}`)
      .then((response: AxiosResponse) => response.data)
      .then((response: User) => response)
  },

  createUser(userInfo: UserInfo): Promise<User> {
    return axiosInstance
      .post('/api/users', userInfo)
      .then((response: AxiosResponse) => response.data)
      .then((response: User) => response)
  },

  updateUser(userInfo: UserInfo): Promise<User> {
    const id = userInfo.id

    return axiosInstance
      .put(`/api/users/${id}`, userInfo)
      .then((response: AxiosResponse) => response.data)
      .then((response: User) => response)
  },

  deactivateUser(id: UserId): Promise<void> {
    return axiosInstance.delete(`/api/users/${id}`)
  },

  loadAvatar(id: UserId): Promise<Avatar> {
    return axiosInstance
      .get(`/api/users/${id}/avatar`)
      .then((response: AxiosResponse) => response.data)
      .then((response: Avatar) => response)
  },

  // TODO: uploadAvatar() {}, '/api/users/${userId}/avatar', post, formData

  deleteAvatar(id: UserId): Promise<Avatar> {
    return axiosInstance.delete(`/api/users/${id}/avatar/delete`)
  }
}
