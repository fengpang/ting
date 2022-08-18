<script lang="ts" setup name="Config">
const configReward = () => {}
const configAction = () => {}
const configStar = () => {}
</script>

<template>
  <div>
    <h5>Reward</h5>
    <div>rewardList</div>
    <button @click="configReward">
      add
    </button>
    <h5>Action</h5>
    <div>actionList</div>
    <button @click="configAction">
      add
    </button>
    <h5>Star</h5>
    <div>rewardList</div>
    <button @click="configStar">
      add
    </button>
  </div>
</template>
