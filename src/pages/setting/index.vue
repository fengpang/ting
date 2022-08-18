<script lang="ts" setup name="Setting">
const go = () => {}
</script>

<template>
  <div>
    <ul class="list">
      <li class="item" @click="go">
        配置
      </li>
      <li class="item" @click="go">
        统计
      </li>
      <li class="item" @click="go">
        导入
      </li>
      <li class="item" @click="go">
        导出
      </li>
    </ul>
  </div>
</template>
