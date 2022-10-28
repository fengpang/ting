<script lang="ts" setup name="Menu">
interface Menu {
  name: string
  path: string
}
const menuList = ref<Menu[]>([
  { name: 'action config', path: 'actionList' },
  { name: 'rewards config', path: 'rewardsConfig' },
  { name: 'statistic', path: 'statistic' },
  { name: 'export', path: 'statistic' },
  { name: 'import', path: 'statistic' },
])
const maxOffset = 188
const translateX = ref(-maxOffset)

let x = 0

const onStart = (e: TouchEvent) => {
  // record the start position
  x = e.touches[0].clientX
}

const onMove = (e: TouchEvent) => {
  const _x = e.touches[0].clientX
  const offset = _x - x
  const newTranslateX = translateX.value + offset
  // record new x position
  x = _x
  if (newTranslateX > 0)
    return
  translateX.value = newTranslateX
}

const onEnd = (e: TouchEvent) => {
  const _translateX = translateX.value
  const halfMax = maxOffset / 2
  if (_translateX < -halfMax)
    translateX.value = -maxOffset

  else
    translateX.value = 0
}

const router = useRouter()
const go = (path: string) => {
  router.push({ name: path })
}

onMounted(() => {
  window.addEventListener('touchstart', onStart)
  window.addEventListener('touchmove', onMove)
  window.addEventListener('touchend', onEnd)
})

onBeforeUnmount(() => {
  window.removeEventListener('touchstart', onStart)
  window.removeEventListener('touchmove', onMove)
  window.removeEventListener('touchend', onEnd)
})
</script>

<template>
  <div class="menu-wrapper" :style="{ transform: `translateX(${translateX}px)`, width: `${maxOffset}px` }">
    <div v-for="menu in menuList" :key="menu.path" class="menu" @click="go(menu.path)">
      {{ menu.name }}
    </div>
  </div>
</template>

<style>
.menu-wrapper {
  padding: 5vh 0;
  line-height: 3;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #c35691;
  color: antiquewhite;
  z-index: 1;
  transition: transform 0.1s;
}
</style>
