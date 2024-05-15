<template>
  <div class="pt-8 pl-10">
    <h1 class="text-4xl font-bold">Users List</h1>
    <the-table :columns="columnsPeople" :data="peopleData" />
  </div>
</template>

<script setup>
import TheTable from "@/components/TheTable.vue";
import EditButton from "@/components/EditButton.vue";
import axios from "axios";
import { ref, h } from "vue";
import { format } from "date-fns";

const data = await axios.get("/api/products");
console.log(data.data.data);
const peopleData = ref(data.data.data);

const columnsPeople = [
  {
    accessorKey: "_id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "product name",
  },
  {
    accessorKey: "category",
    header: "category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },

  {
    accessorKey: "createdAt",
    header: "Created",
    cell: info => format(new Date(info.getValue()), "MMM d, yyyy"),
  },

];
</script>

<script>
export default {
  components: { TheTable },
  name: "UserList",
};
</script>
