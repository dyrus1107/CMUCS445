<template>
  <div class="h-svh">
    <the-navbar />
    <div class="flex h-full pt-20">
      <TheSideBar />
      <div class="pl-[120px] flex-1">
        <Suspense timeout="0">
          <slot />
        </Suspense>
      </div>
    </div>
  </div>
  <!-- <div class="footer">
      <div class="container">
        <b class="copyright">&copy; 2014 Admin - DaoNguyen </b>All rights
        reserved.
      </div>
    </div> -->
</template>
<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheSideBar from "@/components/TheSideBar.vue";
export default {
  components: {
    TheNavbar,
    TheSideBar,
  },
};
</script>

<style scoped></style>
