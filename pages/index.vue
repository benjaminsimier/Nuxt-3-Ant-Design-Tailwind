<template>
  <div>
    <PageHeader class="bg-teaGreen" :title="title" :breadcrumb="{ routes }" />
    <div class="text-lg">Tes</div>
    <a-button>Add</a-button>
    <a-pagination v-model:current="current" :total="50" show-less-items />
  </div>
</template>

<script setup lang="ts">
const title = ref('Page title')

const routes = ref([
  {
    path: '',
    breadcrumbName: 'Home',
  },
  {
    breadcrumbName: 'About',
  },
])

const current = ref(1)
</script>
