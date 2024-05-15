<script setup>
import AppCard from "@/components/ui/Card/AppCard.vue";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar.vue";
</script>

<template>
  <div class="w-full py-8 px-36">
    <div class="grid grid-cols-1 gap-x-10 md:grid-cols-3">
      <AppCard
        variant="lg"
        icon="shuffle"
        text-content="65%"
        span-text="Growth"
      />
      <AppCard
        variant="lg"
        icon="shuffle"
        text-content="65%"
        span-text="Growth"
      />
      <AppCard
        variant="lg"
        icon="shuffle"
        text-content="65%"
        span-text="Growth"
      />
    </div>
    <div class="grid mt-6 md:grid-cols-3 gap-y-8 gap-x-10">
      <div class="grid col-span-2 md:grid-cols-3 gap-x-6 gap-y-4">
        <AppCard icon="shuffle" text-content="65%" />
        <AppCard icon="shuffle" text-content="65%" />
        <AppCard icon="shuffle" text-content="65%" />
        <AppCard icon="shuffle" text-content="65%" />
        <AppCard icon="shuffle" text-content="65%" />
        <AppCard icon="shuffle" text-content="65%" />
      </div>

      <div class="flex flex-col justify-around w-full">
        <progress-bar text="Window" percent="40"/>
        <progress-bar text="Mac" percent="56"/>
        <progress-bar text="Linux" percent="44"/>
        <progress-bar text="iPhone" percent="67"/>
      </div>
    </div>
  </div>
</template>
