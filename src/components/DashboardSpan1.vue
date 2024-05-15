<template>
  <div class="flex flex-col justify-evenly">
    <div class="grid flex-1 grid-cols-3 gap-4 bg-gray-400 justify-items-center">
      <dashboard-card textContent="65%" spanContent="Growth" icon-name="shuffle" />
      <dashboard-card textContent="65%" spanContent="Growth" icon-name="user" />
      <dashboard-card textContent="65%" spanContent="Growth" icon-name="money-bill" />
    </div>
    <div class="flex-1 bg-gray-200">hello</div>
  </div>
</template>

<script setup>
import DashboardCard from "./DashboardCard.vue";
</script>
