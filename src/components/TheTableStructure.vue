<template>
  <table class="min-w-full border-2 border-black divide-y divide-gray-300">
    <thead>
      <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
        <th
          v-for="header in headerGroup.headers"
          :key="header.id"
          scope="col"
          class="px-3 py-3.5 border-2 border-black text-left text-sm font-bold text-gray-900 uppercase"
          :class="{
            'cursor-pointer select-none': header.column.getCanSort(),
          }"
          @click="header.column.getToggleSortingHandler()?.($event)"
        >
          <FlexRender
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
          {{ { asc: " ↑", desc: "↓" }[header.column.getIsSorted()] }}
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          class="px-3 py-3 text-sm border-2 border-black text-back whitespace-nowrap"
        >
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from "vue";
import { FlexRender } from "@tanstack/vue-table";
import {
  useVueTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";

const props = defineProps({
  data: Array,
  columns: Array,
});

const data = ref(props.data);
const sorting = ref([]);
const filter = ref("");

const table = useVueTable({
  data: data.value,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value;
    },
    get globalFilter() {
      return filter.value;
    },
  },
  onSortingChange: updaterOrValue => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
});
</script>
