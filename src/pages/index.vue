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

// const reset = () => {
//   user.reset()
//   configStore.resetActionList()
// }

// reset the action list status if the date change
const dateString = new Date().toDateString()
if (configStore.dateSign !== dateString) {
  configStore.resetActionList()
  configStore.setDateSign(dateString)
}
</script>

<template>
  <div>
    <h1>{{ user.account }}</h1>
    <!-- <button @click="reset">
      reset
    </button> -->
    <ul flex flex-wrap justify-between>
      <li v-for="(action, index) in actionList" :key="index" flex flex-col items-center w-34 h-34 m-b-10 :class="{ disabled: action.status === 1 }" @click="punch(action)">
        <div :class="`i-openmoji-${action.icon}`" w-24 h-24 />
        <span>{{ action.name }}</span>
        <i i-openmoji-candy />
        <i i-openmoji-1st-place-medal />
        <span>* {{ action.starCount }}</span>
      </li>
    </ul>
    <h1>if there must be something, it should be sunshine</h1>
    <div i-openmoji-crown w-xs h-xs @click="goShopping" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
