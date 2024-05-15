<template>
  <div
    class="fixed top-0 w-full z-[49] box-border border-b-[3px] border-black h-20 bg-white"
  >
    <div
      class="flex items-center w-[95%] h-18 gap-4 py-4 justify-between mx-auto"
    >
      <RouterLink to="/" class="justify-center h-10 text-2xl font-bold">
        Admin Panel.</RouterLink
      >
      <div class="flex flex-row items-center justify-between gap-[1px]">
        <input type="text" class="h-10 border-2 border-black w-96" />
        <div
          class="flex items-center justify-center w-16 h-10 bg-black hover:cursor-pointer"
        >
          <MagnifyingGlassIcon class="w-6 h-6 text-white" />
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <NavbarItem :text="'Inbox'">
          <EnvelopeIcon />
        </NavbarItem>
        <NavbarItem :text="'Settings'">
          <Cog6ToothIcon />
        </NavbarItem>
        <NavbarItem :text="'Statictics'">
          <ChartBarSquareIcon />
        </NavbarItem>
      </div>
      <TheDropDownVue />
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import NavbarItem from "./NavbarItem.vue";
import TheDropDownVue from "./TheDropDown.vue";
import {
  EnvelopeIcon,
  Cog6ToothIcon,
  ChartBarSquareIcon,
} from "@heroicons/vue/24/outline";
</script>

<style scoped></style>
