<script>
import DashboardSpan1 from "../components/DashboardSpan1.vue";
export default {
  components: {
    // DashboardSpan1
  },
  name: "HomeView",
};
</script>

<template>
  <div class="flex items-center justify-center h-[95%] gap-24">
    <router-link to="/users" class="flex flex-col items-center justify-center gap-4 border-4 border-black rounded-xl w-44 h-44 hover:cursor-pointer">
      <font-awesome-icon class="w-10 h-10" :icon="['far', 'user']" />
      <h2 class="text-lg font-bold">User List</h2>
    </router-link>
    <router-link to="/products" class="flex flex-col items-center justify-center gap-4 border-4 border-black rounded-xl w-44 h-44 hover:cursor-pointer">
      <font-awesome-icon class="w-10 h-10" :icon="['fas', 'box']" />
      <h2 class="text-lg font-bold">Product list</h2>
    </router-link>
    <router-link to="/employee" class="flex flex-col items-center justify-center gap-4 border-4 border-black rounded-xl w-44 h-44 hover:cursor-pointer">
      <font-awesome-icon class="w-10 h-10" :icon="['fas', 'person']" />
      <h2 class="text-lg font-bold">Employees list</h2>
    </router-link>
  </div>
</template>