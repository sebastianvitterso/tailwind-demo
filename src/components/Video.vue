<template>
  <div class="">
    <img class="" :src="props.video.thumbnail" alt="Thumbnail" />
    <img class="" :src="props.video.icon" alt="Channel icon" />
    <p class="">{{ props.video.title }}</p>
    <p class="">{{ props.video.channel }}</p>
    <p class="">{{ props.video.views }} views</p>
    <p class="">{{ props.video.publishedAt }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '../videos'

const props = defineProps<{ video: Video }>()
</script>

<style></style>
