import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Action, Reward } from '~/types'

export const useConfigStore = defineStore('config', {
  state: () => {
    const actionList = useStorage('actionList', [
      { name: '背单词', icon: '1st-place-medal', starCount: 2, status: 0 },
      { name: '早起', icon: 'candy', starCount: 1, status: 0 },
      { name: '锻炼', icon: 'candy', starCount: 2, status: 0 },
      { name: '口语', icon: 'candy', starCount: 2, status: 0 },
    ])
    const rewardList = useStorage('rewardList', [
      { name: '摩卡壶', price: 300, status: 0 },
    ])
    const dateSign = useStorage('dateSign', '')
    return { actionList, rewardList, dateSign }
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
    setDateSign(dateString: string) {
      this.dateSign = dateString
    },
  },
})
