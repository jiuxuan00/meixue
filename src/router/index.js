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
      path: "/index", name: "Index", component: () => import("@/pages/index/Index.vue")
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
    { path: "/good/list", name: "GoodList", component: () => import("@/pages/good/List") },
    //详情
    {
      path: "/details",
      name: "Details",
      redirect: "/",
      component: () => import("@/pages/details/Index"),
      children: [
        //资讯类详情
        { path: "/details/news/:id", component: () => import("@/pages/details/NewsDetail") },
        { path: "/details/activity/:id", component: () => import("@/pages/details/ActivityDetail") },
        { path: "/details/shop/:id", component: () => import("@/pages/details/ShopDetail") }
      ]
    },

    //我的
    { path: "/my", name: "My", component: () => import("@/pages/my/Index") },
    // 登录
    { path: "/login", name: "Login", component: () => import("@/pages/form/Login") },
    // 注册
    { path: "/register", name: "Register", component: () => import("@/pages/form/Register") }
  ]
});

export default router;
