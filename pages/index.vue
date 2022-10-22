<template>
  <div>
    <div class="bg-pink-500">Test</div>
    <a-button>Add</a-button>
    <a-pagination v-model:current="current" :total="50" show-less-items />
  </div>
</template>

<script setup="ts">
import { Button } from 'ant-design-vue'

const current = ref(2)
</script>
