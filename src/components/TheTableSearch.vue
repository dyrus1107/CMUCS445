<script setup>
import { ref } from "vue";

const filter = ref("");
const emitFilter = () => emit('updateFilter', filter.value);
</script>

<template>
  <div class="flex justify-end w-full my-4">
    <input
      type="text"
      class="px-2 py-2 border-2 border-gray-800 rounded"
      placeholder="Search"
      v-model="filter"
      @input="emitFilter"
    />
  </div>
</template>