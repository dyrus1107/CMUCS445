<!-- UserList.vue -->
<template>
  <div class="pt-8 pl-10">
    <h1 class="text-4xl font-bold">Employee List</h1>
    <the-easy-table />
  </div>
</template>

<script setup>
import TheEasyTable from "@/components/TheEasyTable.vue";
import socket from "@/socket";
import { onMounted } from "vue";

onMounted(() => {
  socket.connect();
  socket.on("connection",data => {
    console.log(data);
  });
});
</script>

<script>
export default {
  name: "UserList",
};
</script>
