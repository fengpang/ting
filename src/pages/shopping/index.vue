<script lang="ts" setup name="Shopping">
import type { Reward } from '~/types'
import { useRecordStore } from '~/store/Record'

const rewardList = useConfigStore().rewardList
const user = useUserStore()
const recordStore = useRecordStore()

const purchase = (reward: Reward): void => {
  if (reward.status === 1) {
    alert('没了')
    return
  }
  if (user.account < reward.price) {
    alert('鬼想')
    return
  }
  reward.status = 1
  recordStore.addShoppingRecord({ time: new Date().toDateString(), reward })
  user.account -= reward.price
}
</script>

<template>
  <div>
    <h1>{{ user.account }}</h1>
    <ul class="reward-list">
      <li v-for="(reward, index) in rewardList" :key="index" class="reward" @click="purchase(reward)">
        {{ reward.name }}
        {{ reward.price }}
        {{ reward.status }}
      </li>
    </ul>
  </div>
</template>
