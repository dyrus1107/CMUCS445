<script setup>
import { cn } from "@/lib/ultis";

defineProps({
  text: String,
  percent: Number,
});
</script>

<template>
  <div class="w-full px-4 py-3 border-2 border-black">
    <div class="flex items-center justify-between mb-1">
      <p class="font-semibold">{{ text }}</p>
      <span class="text-sm text-gray-400">{{ percent }}%</span>
    </div>
    <div class="w-full bg-gray-200 h-2.5 border-black border-2 p-0 m-0 box-border
    ">
      <div
        class="h-full p-0 bg-black"
        :style="`width: ${percent}%`"
      />
    </div>
  </div>
</template>
