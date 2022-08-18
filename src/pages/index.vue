<script setup lang="ts">
import type { Action } from '~/types'
const actionList = useConfigStore().actionList
const user = useUserStore()
const punch = (action: Action) => {
  action.status = 'done'
  user.account += action.starCount
}
</script>

<template>
  <div>
    <h1>{{ user.account }}</h1>
    <ul class="action-list">
      <li v-for="(action, index) in actionList" :key="index" class="action" @click="punch(action)">
        {{ action.name }}
        {{ action.icon }}
        {{ action.status }}
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
