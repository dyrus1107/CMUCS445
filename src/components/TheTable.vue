<script setup>
import { ref } from "vue";
import TheTableControl from "./TheTableControl.vue";
import TheTableSearch from "./TheTableSearch.vue";

import {
  useVueTable,
  FlexRender,
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
  onRowChange: row => {
    if (row && data.value.some(item => item.id === row.id)) {
      // Remove the row from the data array
      data.value = data.value.filter(item => item.id !== row.id);
    }
  },
  removeRow: deleteRow,
});

function deleteRow(id) {
  // Find the index of the row to be deleted
  const index = data.value.findIndex(item => item.id === id);
  // Remove the row from the data array
  if (index !== -1) {
    data.value.splice(index, 1);
  }
}
</script>

<template> <!-- TheTable.vue-->
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flow-root mt-8">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <TheTableSearch v-model="filter" />
          <table
            class="min-w-full border-2 border-black divide-y divide-gray-300"
          >
            <thead>
              <tr
                v-for="headerGroup in table.getHeaderGroups()"
                :key="headerGroup.id"
              >
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
                <td>
                  <button @click="deleteRow(row.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex justify-end w-full mt-2 text-sm text-gray-500">
        Page {{ table.getState().pagination.pageIndex + 1 }} of
        {{ table.getPageCount() }} -
        {{ table.getFilteredRowModel().rows.length }} results
      </div>
      <TheTableControl :table="table" />
    </div>
  </div>
</template>
