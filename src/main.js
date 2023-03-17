import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';
import counterModule from './store/modules/counter';
import {createRouter, createWebHistory} from 'vue-router';
import counterApp from './views/counterApp.vue';
import HomePage from './views/HomePage.vue'


const router = createRouter({
   history: createWebHistory(), 
   routes:[{
  path:'/counter',
   name: counterApp, 
   component:counterApp
   },
   {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
   {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue')
  }
]
  
})

const store = createStore({
  modules: {
    counter: counterModule,
    // other modules here...
  },
  // other store configuration options here...
});

createApp(App).use(store).use(router).mount('#app');


