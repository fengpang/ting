<script setup lang="ts">
import Menu from '../components/Menu.vue'
import type { Action } from '~/types'
import { useRecordStore } from '~/store/Record'
window.localStorage.setItem('test', '233333333')
const configStore = useConfigStore()
const user = useUserStore()
const recordStore = useRecordStore()
const actionList = configStore.actionList

const punch = (action: Action) => {
  if (action.status === 2)
    return
  action.finishedCount++
  if (action.finishedCount < action.maxCount) {
    action.status = 1
    return
  }
  action.status = 2
  recordStore.addPunchRecord({ time: new Date().toDateString(), action })
  user.account += action.starCount
}

const router = useRouter()

const goShopping = () => {
  router.push({ name: 'shopping' })
}

// reset the action list status if the date change
const dateString = new Date().toDateString()
if (configStore.dateSign !== dateString) {
  configStore.resetActionList()
  configStore.setDateSign(dateString)
}
</script>

<template>
  <div>
    <Menu />
    <h2 @click="user.account = 60">
      reset
    </h2>
    <h1>{{ user.account }}</h1>
    <ul flex flex-wrap justify-between>
      <li v-for="(action, index) in actionList" :key="index" flex flex-col items-center w-34 h-34 m-b-10 :class="{ disabled: action.status === 2 }" @click="punch(action)">
        <div v-if="action.maxCount > 1 && action.status === 1" class="finished-percent">
          {{ `${action.finishedCount}/${action.maxCount}` }}
        </div>
        <div :class="`i-openmoji-${action.icon}`" w-24 h-24 />
        <span>{{ action.name }}</span>
        <i i-openmoji-candy />
        <i i-openmoji-1st-place-medal />
        <span>* {{ action.starCount }}</span>
      </li>
    </ul>
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_riok2joc.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay @click="goShopping" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
