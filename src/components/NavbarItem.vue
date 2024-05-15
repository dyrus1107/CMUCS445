<template>
  <div
    class="group flex flex-row items-center justify-between gap-1 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-black hover:cursor-pointer border-b-[3px] border-transparent hover:border-black "
  >
    <slot />
    <p class="font-bold">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["text"],
};
</script>

<style scoped>
div {
  color: black;
}
</style>
