<template>
  <div>
    <div
      class="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-teaGreen"
    >
      <div class="text-center">
        <div class="text-2xl font-medium text-richBlack">
          Nuxt 3 + Ant Design + Tailwind
        </div>
        <div class="mt-4 flex w-full justify-center gap-6">
          <div>
            <nuxt-link to="/about" class="text-smoke hover:text-richBlack">
              About
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/dashboard" class="text-smoke hover:text-richBlack">
              Dashboard
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
