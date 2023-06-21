<template>
  <div class="flex cursor-pointer flex-col gap-2 rounded-xl ring-zinc-800 active:ring-2">
    <img class="overflow-hidden sm:rounded-xl" :src="props.video.thumbnail" alt="Thumbnail" />
    <div class="flex items-start">
      <img class="m-2 w-12 rounded-full" :src="props.video.icon" alt="Channel icon" />
      <div class="flex flex-col">
        <p class="font-bold sm:text-lg">{{ props.video.title }}</p>
        <p class="text-sm text-gray-400 sm:text-base">
          {{ props.video.channel }}
          <span class="hidden sm:inline">✅</span>
        </p>
        <div class="flex gap-1">
          <p class="text-sm text-gray-400 sm:text-base">{{ props.video.views }} views</p>
          <p>•</p>
          <p class="text-sm text-gray-400 sm:text-base">
            {{ props.video.publishedAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '../videos'
const props = defineProps<{ video: Video }>()
</script>

<style></style>
