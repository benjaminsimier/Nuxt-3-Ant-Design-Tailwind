<template>
  <div>
    <PageHeader class="bg-teaGreen" :title="title" :breadcrumb="{ routes }" />
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
