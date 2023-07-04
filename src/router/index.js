import { createRouter, createWebHistory } from 'vue-router';

import Homes from '../components/Homes.vue';
import Photo from '../components/Photo.vue';
import Cuaca from '../components/Cuaca.vue';
import Lokasi from '../components/Lokasi.vue';
import Stopwatch from '../components/Stopwatch.vue';


const routes = [
  { path: '/', component: Homes},
  { path: '/Photo', component: Photo},
  { path: '/Cuaca', component: Cuaca},
  { path: '/Lokasi', component: Lokasi},
  { path: '/Stopwatch', component: Stopwatch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;