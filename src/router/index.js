import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import UsersList from '@/views/UsersList.vue';
import ProductList from '@/views/ProductList.vue';
import EmployeeList from '@/views/EmployeeList.vue';
import TestUi from '@/views/TestUi.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { layout: MainLayout },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: { layout: MainLayout },
  },
  {
    path: "/users",
    name: "UsersList",
    component:  UsersList ,
    meta: { layout: MainLayout },
  },
  {
    path: "/products",
    name: "ProductList",
    component:  ProductList ,
    meta: { layout: MainLayout },
  },
  {
    path: "/employee",
    name: "EmployeeList",
    component:  EmployeeList ,
    meta: { layout: MainLayout },
  },
  {
    path: "/testui",
    name: "TestUi",
    component:  TestUi ,
    meta: { layout: MainLayout },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
