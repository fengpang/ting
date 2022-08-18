<script lang="ts" setup name="Shopping">
import type { Reward } from '~/types'

const rewardList = useConfigStore().rewardList
const user = useUserStore()
const purchase = (reward: Reward): void => {
  reward.status = 'soldOut'
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
