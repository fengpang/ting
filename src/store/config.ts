import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Action, Reward } from '~/types'

export const useConfigStore = defineStore('config', {
  state: () => {
    const actionList = useStorage('actionList', [
      { name: '背单词', icon: '1st-place-medal', finishedCount: 0, maxCount: 1, starCount: 2, status: 0 },
      { name: '早起', icon: 'candy', finishedCount: 0, maxCount: 1, starCount: 1, status: 0 },
      { name: '锻炼', icon: 'candy', finishedCount: 0, maxCount: 1, starCount: 2, status: 0 },
      { name: '口语', icon: 'candy', finishedCount: 0, maxCount: 1, starCount: 2, status: 0 },
      { name: '听力', icon: 'candy', finishedCount: 0, maxCount: 8, starCount: 8, status: 0 },
    ], localStorage, { mergeDefaults: true })
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
    addReward(action: Reward) {
      this.rewardList.push(action)
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
