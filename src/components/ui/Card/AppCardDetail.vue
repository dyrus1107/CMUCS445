<script setup>
import { cn } from "@/lib/ultis";

defineProps({
  textContent: String,
  spanText: String,
  icon: String,
  iconStyle: String,
  variant: String,
  className: String,
});

const wrapperStyle = "flex flex-col justify-center items-center";
const wrapperVariants = {
  lg: "gap-4",
  default: "gap-2",
};

const iconVariants = {
  lg: "w-14 h-14",
  default: "w-8 h-8",
};

const textVariants = {
  lg: "text-2xl ",
  default: "",
};

const spanVariants = {
  lg: "text-sm",
  default: "text-lg",
};
</script>

<template>
  <div :class="cn(wrapperStyle, wrapperVariants[variant], className)">
    <font-awesome-icon
      :class="cn(iconVariants[variant], className)"
      :icon="[iconStyle, icon]"
    />
    <div class="flex flex-col items-center">
      <h1 :class="cn(textVariants[variant], className)">{{ textContent }}</h1>
      <span :class="cn(spanVariants[variant], className)"> {{ spanText }}</span>
    </div>
  </div>
</template>
