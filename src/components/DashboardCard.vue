<template>
  <div
    class="flex flex-col items-center self-center justify-center w-56 h-32 gap-2 bg-red-400"
  >
    <font-awesome-icon class="w-6 h-6" :icon="['fas', iconName]" />
    <p class="text-lg">{{ textContent }}</p>
    <span class="text-gray-700">{{ spanContent }}</span>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    textContent: {
      type: String,
      default: "",
    },
    spanContent: {
      type: String,
      default: "",
    },
  },
};
</script>
