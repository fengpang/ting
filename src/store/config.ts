import { defineStore } from 'pinia'
import type { Action, Reward } from '~/types'

export const useConfigStore = defineStore('config', {
  state: () => {
    const actionList: Action[] = [
      { name: '背单词', icon: 'icon', starCount: 2, status: 'Todo' },
    ]
    const rewardList: Reward[] = [
      { name: '摩卡壶', price: 300, status: 'much' },
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
  },
})
