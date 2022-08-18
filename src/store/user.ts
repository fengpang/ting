import { acceptHMRUpdate, defineStore } from 'pinia'
import type { User } from '~/types'

export const useUserStore = defineStore('user', {
  state: (): User => {
    return {
      name: 'fengpang',
      account: 0,
      avatar: 'xxx',
    }
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
