import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


let router = new Router({
  routes: [
    {
      path: "/", redirect: "/index"
    },
    //美学
    {
      path: "/index", name: "Index", component: () => import("@/pages/home/Index")
    },
    //发现
    {
      path: "/find", name: "Find", component: () => import("@/pages/find/Index")
    },
    //好物
    {
      path: "/good",
      name: "GoodIndex",
      component: () => import("@/pages/good/Index")
    },

    //详情
    {
      path: "/details",
      name: "Details",
      redirect: "/",
      component: () => import("@/pages/details/Router"),
      children: [
        //资讯类详情
        { path: "/details/news/:id", component: () => import("@/pages/details/NewsDetail") },
        { path: "/details/activity/:id", component: () => import("@/pages/details/ActivityDetail") }
      ]
    },

    //我的
    { path: "/my", name: "My", component: () => import("@/pages/my/Index.vue") },
    // 登录
    { path: "/login", name: "Login", component: () => import("@/pages/form/Login.vue") },
    // 注册
    { path: "/register", name: "Register", component: () => import("@/pages/form/Register.vue") }
  ]
});

export default router;
