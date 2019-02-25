import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


let router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "Index",
      component: () => import("@/pages/index/Index.vue")
    },
    {//推荐
      path: "/recommend/list",
      name: "RecommendList",
      component: () => import("@/pages/recommend/List.vue")
    },
    {//发现
      path: "/find",
      name: "Find",
      component: () => import("@/pages/find/Index.vue")
    },
    //好物
    {
      path: "/good",
      name: "GoodIndex",
      component: () => import("@/pages/good/Index.vue")
    },
    { path: "/good/list", name: "GoodList", component: () => import("@/pages/good/List.vue") },
    //详情
    {
      path: "/details",
      name: "Details",
      redirect: "/",
      component: () => import("@/pages/details/Index.vue"),
      children: [
        //资讯类详情
        { path: "/details/news/:id", component: () => import("@/pages/details/NewsDetail.vue") },
        { path: "/details/activity/:id", component: () => import("@/pages/details/ActivityDetail.vue") },
        { path: "/details/shop/:id", component: () => import("@/pages/details/ShopDetail.vue") }
      ]
    },

    //我的
    {
      path: "/my", name: "My", component: () => import("@/pages/my/Router.vue"),
      children: [
        {
          path: "/my",
          component: () => import("@/pages/my/Index.vue")
        },
        {//消息
          path: "/my/message",
          component: () => import("@/pages/my/Message.vue")
        },
        {
          path: "/my/personal",
          component: () => import("@/pages/my/Personal.vue")
        },
        {
          path: "/my/order",
          component: () => import("@/pages/my/Order.vue")
        },
        {//发布动态
          path: "/my/release",
          meta: {
            footer: 0
          },
          component: () => import("@/pages/my/Release.vue")
        },
        {//标识单品
          path: "/my/single",
          component: () => import("@/pages/my/Single.vue")
        }
      ]
    },
    // 登录
    { path: "/login", name: "Login", component: () => import("@/pages/form/Login") },
    // 注册
    { path: "/register", name: "Register", component: () => import("@/pages/form/Register") }
  ]
});

export default router;
