import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { ActionRecord, ShoppingRecord } from '~/types'

export const useRecordStore = defineStore('record', {
  state: () => ({
    punchRecord: useStorage<ActionRecord[]>('punchRecord', []),
    shoppingRecord: useStorage<ShoppingRecord[]>('shoppingRecord', []),
  }),
  actions: {
    addPunchRecord(action: ActionRecord) {
      this.punchRecord.push(action)
    },
    addShoppingRecord(action: ShoppingRecord) {
      this.shoppingRecord.push(action)
    },
  },
})
