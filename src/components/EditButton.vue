<script setup>
const props = defineProps({
  id: Number,
});
</script>

<template>
  <a :href="`/users/${id}/edit`" class="text-indogo-600 hover:text-indigo-500">Edit</a>
</template>
