import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Action, Reward } from '~/types'

export const useConfigStore = defineStore('config', {
  state: () => {
    const actionList = useStorage('actionList', [
      { name: '背单词', icon: '1st-place-medal', finishedCount: 0, maxCount: 1, starCount: 2, status: 0 },
    ], localStorage, {
      mergeDefaults: (storageValue, defaults) => {
        const defaultPropertyLength = Object.keys(defaults[0]).length
        const storagePropertyLength = Object.keys(storageValue[0]).length
        if (defaultPropertyLength > storagePropertyLength)
          return storageValue.map(item => ({ ...defaults[0], ...item }))
        return storageValue
      },
    })
    const rewardList = useStorage('rewardList', [
      { name: '金豪b椅子', price: 2400, status: 0 },
    ])
    const dateSign = useStorage('dateSign', '')
    return { actionList, rewardList, dateSign }
  },
  actions: {
    addAction(action: Action) {
      this.actionList.push(action)
    },
    deleteAction(action: Action) {
      const index = this.actionList.indexOf(action)
      this.actionList.splice(index, 1)
    },
    addReward(reward: Reward) {
      this.rewardList.push(reward)
    },
    deleteReward(reward: Reward) {
      const index = this.rewardList.indexOf(reward)
      this.rewardList.splice(index, 1)
    },
    resetActionList() {
      this.actionList.forEach((action) => {
        action.status = 0
        action.finishedCount = 0
      })
    },
    setDateSign(dateString: string) {
      this.dateSign = dateString
    },
  },
})
