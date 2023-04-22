<template>
  <div class="container">
    <article class="prose mx-auto mt-14 py-10 lg:prose-xl">
      <div v-if="props.error.statusCode === 404">
        <h4>{{ props.error.statusCode }}</h4>
        <h1>Page Not Found</h1>
        <p>Sorry, we couldn't find the page.</p>
      </div>
      <div v-else>
        <h4>{{ props.error.statusCode }}</h4>
        <h1>This page isn't working</h1>
        <p>{{ fullPath }} is currently unable to handle this request.</p>
      </div>

      <div>
        <a
          class="mb-10 inline-block text-sm text-gray-500 no-underline"
          @click.prevent="handleError"
        >
          Go to homepage
        </a>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

const props = defineProps({
  error: Object,
})

const fullPath = ref('')
onMounted(() => {
  nextTick(() => {
    fullPath.value = window.location.href
  })
})

const handleError = () => clearError({ redirect: '/' })
</script>
