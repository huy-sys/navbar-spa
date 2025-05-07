import { createWebHistory, createRouter } from 'vue-router'

const routes = [
//   {path: "/", exact: true, redirect: "/"},
  // {path: "/vue", redirect: "/vue"},
]

export default createRouter({
  history: createWebHistory(),
  routes
})