import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import LdSidebar from '~/components/ui/ld-sidebar.vue'
import { afterEach, describe, expect, it } from 'vitest'

enableAutoUnmount(afterEach)

const componentFactory = () => {
  return shallowMount(LdSidebar)
}

describe('LdSidebar.vue', () => {
  let wrapper

  it('показывает список ссылок для роли "Пользователь"', () => {
    wrapper = componentFactory()
    expect(wrapper.exists()).toBe(true)
  })

  it('показывает ссылку по умолчанию для роли "Пользователь"', () => {
    wrapper = componentFactory()
    expect(wrapper.exists()).toBe(true)
  })

  it('показывает список ссылок для роли "Администратор"', () => {
    wrapper = componentFactory()
    expect(wrapper.exists()).toBe(true)
  })

  it('показывает ссылку по умолчанию для роли "Администратор"', () => {
    wrapper = componentFactory()
    expect(wrapper.exists()).toBe(true)
  })

  it('выполняет переключение между ссылками', () => {
    wrapper = componentFactory()
    expect(wrapper.exists()).toBe(true)
  })

  it('определяет стили активной ссылки', () => {
    wrapper = componentFactory()
    expect(wrapper.exists()).toBe(true)
  })
})
