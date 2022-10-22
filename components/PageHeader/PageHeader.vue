<template>
  <div>
    <a-page-header :title="props.title" :breadcrumb="props.breadcrumb" />
  </div>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '~~/types/utils/breadcrumb'

const props = defineProps<{
  title?: string
  breadcrumb?: Breadcrumb[] | object
}>()
</script>
