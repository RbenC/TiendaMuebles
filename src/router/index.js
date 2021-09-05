import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nosotros from '../views/Nosotros.vue';
import Productos from '../views/Productos.vue';
import Blog from '../views/Blog.vue';
import Galeria from '../views/Galeria.vue';
import Contacto from '../views/Contacto.vue';
import Entrada from '../views/Entrada.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/entrada',
    name: 'Entrada',
    component: Entrada
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
