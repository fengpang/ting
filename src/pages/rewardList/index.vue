<script lang="ts" setup name="rewardList">
import type { Reward } from '~/types'
const configStore = useConfigStore()
const basicData: Reward = {
  name: '',
  status: 0,
  price: 1,
}
const rewardData = ref<Reward>({ ...basicData })

const addReward = () => {
  configStore.addReward(rewardData.value)
  rewardData.value = { ...basicData }
}
</script>

<template>
  <div class="action-list">
    name <input
      v-model="rewardData.name" type="text"
      autocomplete="false"
      p="x4 y2"
      mb2
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    ><br>
    icon <input
      v-model="rewardData.price" type="text"
      autocomplete="false"
      mb2
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    ><br>
    <button btn m-3 text-sm :disabled="!rewardData.name" @click="addReward">
      add action
    </button>
    <h1>---------------------------------</h1>
    <div v-for="(reward, index) in configStore.rewardList" :key="index" class="reward-item">
      name: {{ reward.name }}<br>
      maxCount: {{ reward.price }}<br>
      <button btn m-3 text-sm @click="configStore.deleteReward(reward)">
        delete
      </button>
    </div>
  </div>
</template>
