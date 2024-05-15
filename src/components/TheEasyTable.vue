<template>
  <EasyDataTable :headers="headers" :items="items">
    <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
      <div class="flex gap-2">
        <div class="flex items-center justify-center gap-1">
          <the-table-dialog @add-row="handleAddRow" />
        </div>
        <button
          class="p-1 text-white rounded-md cursor-pointer bg-slate-800"
          :disabled="isFirstPage"
          @click="prevPage"
        >
          prev page
        </button>
        <button
          class="p-1 border rounded-md cursor-pointer text-slate-800 border-slate-800"
          :disabled="isLastPage"
          @click="nextPage"
        >
          next page
        </button>
      </div>
    </template>
    <template #item-delete="item">
      <a
        href="javascript:void(0);"
        @click="deleteItem(item)"
        class="px-3 py-1 text-white bg-red-500 rounded-md dropdown-item hover:bg-red-400"
      >
        Delete
      </a>
    </template>
  </EasyDataTable>
</template>

<script setup>
import socket from "@/socket";
import axios from "axios";
import { ref } from "vue";
import TheTableDialog from "./TheTableDialog.vue";

const { data } = await axios.get("/api/employee");
const items = ref(data.data);

const headers = [
  {
    text: "ID",
    value: "_id",
    sortable: true,
  },
  {
    text: "First Name",
    value: "firstName",
    sortable: true,
  },
  {
    text: "Last Name",
    value: "lastName",
    sortable: true,
  },
  {
    text: "Vacation Days",
    value: "vacationDays",
    sortable: true,
  },
  {
    text: "Paid to Date",
    value: "paidToDate",
    sortable: true,
  },
  {
    text: "Paid Last Year",
    value: "paidLastYear",
    sortable: true,
  },
  {
    text: "Pay Rate",
    value: "payRate",
    sortable: true,
  },
  { text: "Delete", value: "delete", width: 200 },
];

socket.on("success_create", msg => {
  const {
    employeeId,
    firstName,
    lastName,
    vacationDays,
    paidToDate,
    paidLastYear,
    payRate,
    payRateId,
  } = msg;
  const newData = {
    employeeId,
    firstName,
    lastName,
    vacationDays,
    paidToDate,
    paidLastYear,
    payRate,
    payRateId,
  };
  handleAddRow(newData)
});

const handleAddRow = newEmployee => {
  const copiedItems = [...items.value];

  // Then, push the new employee into the copied array
  copiedItems.push({ ...newEmployee });

  // Finally, update the items ref with the new array
  items.value = copiedItems;
};

const deleteItem = async value => {
  const { _id } = value;
  // const deletedEmployee = await axios.delete(`/api/employee/${_id}`);
  socket.emit("delete", _id);
  items.value = items.value.filter(item => item._id !== _id);

  // console.log(deletedEmployee);
  // const index = items.value.findIndex(
  //   item => item.englishName === itemToDelete.englishName
  // );
  // if (index !== -1) {
  //   items.value.splice(index, 1);
  // }
};
</script>
