<script setup lang="ts">
import type { Action } from '~/types'
const configStore = useConfigStore()
const actionList = configStore.actionList
const user = useUserStore()
const punch = (action: Action) => {
  if (action.status === 1)
    return
  action.status = 1
  user.account += action.starCount
}

const router = useRouter()

const goShopping = () => {
  router.push({ name: 'shopping' })
}

const reset = () => {
  user.reset()
  configStore.resetActionList()
}
</script>

<template>
  <div>
    <h1>{{ user.account }}</h1>
    <button @click="reset">
      reset
    </button>
    <ul>
      <li v-for="(action, index) in actionList" :key="index" class="action" :class="{ disabled: action.status === 1 }" @click="punch(action)">
        <div :class="action.icon" w-sm h-sm />
        <span>{{ action.name }}</span>
      </li>
    </ul>
    <div i-openmoji-crown w-xs h-xs @click="goShopping" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
