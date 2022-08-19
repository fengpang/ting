import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    const user = useStorage('user', {
      name: 'fengpang',
      account: 0,
      avatar: 'xxx',
    })
    return user
  },
  actions: {
    reset() {
      this.$state.account = 0
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
