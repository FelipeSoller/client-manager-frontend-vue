import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Lista de Clientes',
    component: () => import('../components/list-client/ListClientComponent'),
  },
  {
    path: '/client-create',
    name: 'Adicionar clientes',
    component: () => import('../components/create-client/CreateClientComponent'),
  },
  {
    path: '/client-edit/:id',
    name: 'Atualizar clientes',
    component: () => import('../components/edit-client/EditClientComponent'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
