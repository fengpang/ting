<script lang="ts" setup name="Menu">
interface Menu {
  name: string
  path: string
}
const menuList = ref<Menu[]>([
  { name: 'action config', path: 'actionConfig' },
  { name: 'rewards config', path: 'rewardsConfig' },
  { name: 'statistic', path: 'statistic' },
])
</script>

<template>
  <div class="menu-wrapper">
    <div v-for="menu in menuList" :key="menu.path" class="menu">
      {{ menu.name }}
    </div>
  </div>
</template>
