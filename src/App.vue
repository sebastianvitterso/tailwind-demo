<template>
  <NavBar />
  <div class="flex flex-col items-center gap-4 pt-4">
    <div class="">
      <Video v-for="video in videos" :key="video.title" :video="video" />
    </div>
    <!-- <div
      class="flex w-full max-w-screen-xl flex-col gap-4 gap-y-6 sm:m-4 sm:grid sm:grid-cols-2 lg:grid-cols-3"
    >
      <VideoFixed v-for="video in videos" :key="video.title" :video="video" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Video from './components/Video.vue'
// import VideoFixed from './components/VideoFixed.vue'
import { videos } from './videos'
</script>

<style scoped></style>
