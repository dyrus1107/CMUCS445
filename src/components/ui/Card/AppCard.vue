<script setup>
import { cn } from "@/lib/ultis";
import AppCardDetail from "./AppCardDetail.vue";

const baseStyle =
  "border-2 border-black flex flex-col justify-center items-center ga";
const cardVariants = {
  lg: " lg:h-48  h-40",
  // lg: "lg:w-80 lg:h-48 w-64 h-40",
  default: "h-32",
  // default: "w-64 h-40",
};

defineProps({
  textContent: String,
  spanText: String,
  className: String,
  icon: String,
  /**
   * The style of font awesome icon
   * @value fas, far
   * (default - far)
   */
  iconStyle: String,
  /**
   * The variant of the card
   * @value lg, default, sm
   */
  variant: {
    validator(value) {
      return ["lg", "default", "sm"].includes(value);
    },
    default() {
      return "default";
    },
  },
});
</script>

<template>
  <div :class="cn(baseStyle, cardVariants[variant], className)">
    <AppCardDetail
      :icon="icon"
      :variant="variant"
      :spanText="spanText"
      :iconStyle="iconStyle"
      :textContent="textContent"
    />
  </div>
</template>
