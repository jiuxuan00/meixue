import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/index" },
    //美学
    { path: "/index", name: "Index", component: () => import("@/pages/home/Index.vue") },
    //发现
    { path: "/find", name: "Find", component: () => import("@/pages/find/Index.vue") },
    //发现 活动详情
    { path: "/find/choice/:id", name: "FindChoice", component: () => import("@/pages/details/ChoiceDetail.vue") },
    { path: "/find/activity/:id", name: "FindActivity", component: () => import("@/pages/details/ActivityDetail.vue") },
    //好物
    { path: "/good", name: "Good", component: () => import("@/pages/good/Index.vue") },
    //我的
    { path: "/my", name: "My", component: () => import("@/pages/my/Index.vue") },
    // 登录
    { path: "/login", name: "Login", component: () => import("@/pages/form/Login.vue") },
    // 注册
    { path: "/register", name: "Register", component: () => import("@/pages/form/Register.vue") }
  ]
});
