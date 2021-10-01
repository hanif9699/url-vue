import Vue from "vue";
import Router from "vue-router"
import Form from './components/Form.vue'
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        alias: "/url",
        name: "Create Url",
        component: Form
      },
      
    ]
  });