<template> <!-- theTableControl.vue-->
  <div class="flex justify-between">
    <div class="mt-6 space-x-2">
      <button
        class="px-2 py-2 font-semibold border border-black disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageSize(5)"
      >
        Page Size 5
      </button>
      <button
        class="px-2 py-2 font-semibold border border-black disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageSize(10)"
      >
        Page Size 10
      </button>
      <button
        class="px-2 py-2 font-semibold border border-black disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageSize(20)"
      >
        Page Size 20
      </button>
    </div>
    <div class="mt-6 space-x-4">
      <button
        class="px-2 py-2 border border-black w-14 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(0)"
      >
        <font-awesome-icon :icon="['fas', 'angles-left']" />
      </button>

      <button
        class="px-2 py-2 border border-black w-14 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!table.getCanPreviousPage()"
        @click="table.previousPage()"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button
        class="px-2 py-2 border border-black disabled:opacity-50 w-14 disabled:cursor-not-allowed"
        :disabled="!table.getCanNextPage()"
        @click="table.nextPage()"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
      <button
        class="px-2 py-2 border border-black w-14 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(table.getPageCount() - 1)"
      >
        <font-awesome-icon :icon="['fas', 'angles-right']" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  table: Object,
});
</script>
