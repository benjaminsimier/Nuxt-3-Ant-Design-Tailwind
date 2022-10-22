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
              <div class="flex items-center">
                <div class="mr-2 -mt-2">
                  <info-circle-outlined />
                </div>
                <div>About</div>
              </div>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              to="https://github.com/benjaminsimier/Nuxt-3-Ant-Design-Tailwind"
              target="_blank"
              class="text-smoke hover:text-richBlack"
            >
              <div class="flex items-center">
                <div class="mr-2 -mt-2">
                  <github-outlined />
                </div>
                <div>Github</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
