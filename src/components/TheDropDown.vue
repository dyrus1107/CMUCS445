<template>
  <Menu as="div" class="relative inline-block text-left w-52">
    <div class="group">
      <MenuButton
        class="inline-flex items-center justify-center w-full h-12 gap-4 px-3 py-2 text-sm font-bold text-gray-900 transition duration-300 ease-in-out bg-white border-2 border-black group-hover:bg-black hover:bg-black group-hover:text-white"
      >
        <UserIcon class="w-6 h-6 ml-1" />
        <span class="text-2xl font-lg">Admin</span>
        <ChevronDownIcon
          class="w-5 h-5 ml-auto mr-2 text-black group-hover:text-white"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border-2 border-black focus:outline-none"
      >
        <div>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-black text-white' : 'text-black',
                'px-4 py-2 h-12 font-semibold flex items-center',
              ]"
              >Your Profile</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-black text-white' : 'text-black',
                'flex items-center px-4 py-2 h-12 font-semibold',
              ]"
              >Edit Profile</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-black text-white' : 'text-black',
                'flex items-center px-4 py-2 h-12 font-semibold',
              ]"
              >Account Settings</a
            >
          </MenuItem>
          <form method="POST" action="#">
            <MenuItem v-slot="{ active }">
              <button
                type="submit"
                :class="[
                  active ? 'bg-black text-white' : 'text-black',
                  'flex items-center w-full px-4 py-2 h-12 text-left border-t border-gray-600 font-semibold',
                ]"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon, UserIcon } from "@heroicons/vue/20/solid";
</script>

<script>
export default {
  name: "TheDropDown",
};
</script>

<!-- <style scoped>
.abc {
  transition: 
}
</style> -->
