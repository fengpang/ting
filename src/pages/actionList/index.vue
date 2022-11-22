<script lang="ts" setup name="actionList">
import type { Action } from '~/types'
const configStore = useConfigStore()
const basicData: Action = {
  name: '',
  maxCount: 1,
  starCount: 1,
  icon: '1st-place-medal',
  finishedCount: 0,
  status: 0,
}
const actionData = ref<Action>({ ...basicData })

const addAction = () => {
  configStore.addAction(actionData.value)
  actionData.value = { ...basicData }
}
</script>

<template>
  <div class="action-list">
    name <input
      v-model="actionData.name" type="text"
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
      v-model="actionData.icon" type="text"
      autocomplete="false"
      mb2
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    ><br>
    reward <input
      v-model.number="actionData.starCount" type="text"
      autocomplete="false"
      mb2
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    ><br>
    maxCount <input
      v-model.number="actionData.maxCount" type="text"
      autocomplete="false"
      mb2
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    ><br>
    <button btn m-3 text-sm :disabled="!actionData.name" @click="addAction">
      add action
    </button>
    <h1>---------------------------------</h1>
    <div v-for="(action, index) in configStore.actionList" :key="index" class="action-item">
      name: {{ action.name }}<br>
      maxCount: {{ action.maxCount }}<br>
      reward: {{ action.starCount }}<br>
      icon: {{ action.icon }}<br>
      <button btn m-3 text-sm @click="configStore.deleteAction(action)">
        delete
      </button>
    </div>
  </div>
</template>
