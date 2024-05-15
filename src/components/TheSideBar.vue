<script setup>
import TheSideBarItems from "./TheSideBarItems.vue";
</script>

<template>
  <div
    class="w-[120px] border-black border-r-[3px] h-full fixed left-0 flex flex-col items-center justify-start pt-16"
  >
    <the-side-bar-items text-content="Dashboard" icon-name="gauge" />
    <the-side-bar-items text-content="Personal List" icon-name="bullhorn" />
    <the-side-bar-items
      text-content="Benefit Plans"
      icon-name="bars-progress"
    />
    <the-side-bar-items text-content="Job History" icon-name="inbox" />
    <the-side-bar-items class="mt-24" text-content="More Pages" icon-name="gear" />
    <the-side-bar-items
      text-content="Logout"
      icon-name="arrow-right-from-bracket"
    />
  </div>
  <!-- <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="span3">
          <div class="sidebar">
            <ul class="widget widget-menu unstyled">
              <li class="active">
                <a href="~/">
                  <i class="menu-icon icon-dashboard"></i>Dashboard
                </a>
              </li>
              <li>
                <a href="~/Personals"
                  ><i class="menu-icon icon-bullhorn"></i>Personal List
                </a>
              </li>
              <li>
                <a href="~/BenefitPlans">
                  <i class="menu-icon icon-tasks"></i>Benefit Plans
                </a>
              </li>
              <li>
                <a href="~/JobHistory">
                  <i class="menu-icon icon-inbox"></i>Job History
                </a>
              </li>
            </ul>
            <ul class="widget widget-menu unstyled">
              <li>
                <a class="collapsed" data-toggle="collapse" href="#togglePages">
                  <i class="menu-icon icon-cog"> </i
                  ><i class="icon-chevron-down pull-right"></i
                  ><i class="icon-chevron-up pull-right"> </i>More Pages
                </a>
                <ul id="togglePages" class="collapse unstyled">
                  <li>
                    <a href="#"><i class="icon-inbox"></i>Login </a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-inbox"></i>Profile </a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-inbox"></i>All Users </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"><i class="menu-icon icon-signout"></i>Logout </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
