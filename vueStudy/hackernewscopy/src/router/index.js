import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);


//code splitting
const creatListPage = id =>()=>import('../views/CreateListPage.js').then(m=>m.default(id))
const ItemPage = ()=> import('../views/ItemPage.vue')
const One = ()=> import('../views/One.vue')


export function createRouter () {
  return new Router({
    routes: [
      {
        path: "/:page",
        name: "all",
        component: creatListPage('all')
      },
      {
        path: "/dev/:page",
        name: "dev",
        component: creatListPage('dev')
      },
      {
        path: "/job/:page",
        name: "job",
        component: creatListPage('job')
      },
      {
        path: "/one/:id",
        name: "one",
        component: One
      },
      {
        path: "/itemPage/:id",
        name: "itemPage",
        component: ItemPage
      },
      {
         path: '*', redirect: '/' 
      }
    ]
  })
}