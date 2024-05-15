<template>
  <div
    class="flex flex-col items-center justify-center rounded-xl gap-2 w-[110px] h-[110px] font-bold hover:border-2 hover:border-black hover:cursor-pointer"
  >
    <font-awesome-icon class="w-6 h-6" :icon="computedIcon" />
    <p>{{ textContent }}</p>
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
      required: true,
    },
  },
  computed: {
    computedIcon() {
      return ["fas", this.iconName];
    },
  },
};
</script>
