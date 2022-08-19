import { defineStore } from 'pinia'
import type { Action, Reward } from '~/types'

export const useConfigStore = defineStore('config', {
  state: () => {
    const actionList = useStorage('actionList', [
      { name: '背单词', icon: 'i-openmoji-1st-place-medal', starCount: 2, status: 0 },
    ])
    const rewardList = [
      { name: '摩卡壶', price: 300, status: 0 },
    ]
    return { actionList, rewardList }
  },
  actions: {
    addAction(action: Action) {
      this.actionList.push(action)
    },
    addReward(action: Reward) {
      this.rewardList.push(action)
    },
    resetActionList() {
      this.actionList.map(action => action.status = 0)
    },
  },
})
