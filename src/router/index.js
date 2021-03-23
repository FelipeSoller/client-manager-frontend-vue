import Vue from 'vue';
import VueRouter from 'vue-router';

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
    path: '/client-update',
    name: 'Atualizar clientes',
    component: () => import('../components/edit-client/EditClientComponent'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
