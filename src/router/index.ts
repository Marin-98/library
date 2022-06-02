import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'


const routes:Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  },
  {
          path:"/",
          component:Home,
          name: "home",
          redirect: "/homeindex",
          children:[
                  {
                    path:"/homeindex",
                    component:()=>import("@/components/Layout/Content/home/index.vue"),
                    name:"",
                    meta:{
                      title:"首页信息",
                      icon:"",
                    }
                  }
              ],
        },
        {
          path:"/system",
          component:Home,
          name:"system",
              children:[
                  {
                    path:"/systemindex",
                    component:()=>import("@/components/Layout/Content/system/index.vue"),
                    name:"",
                    meta:{
                      title:"系统信息",
                      icon:"Setting",
                    }
                  },
              ],
        },
         {
          path:"/student",
          component:Home,
          name:"student",
              children:[
                  {
                    path:"/studentindex",
                    component:()=>import("@/components/Layout/Content/student/index.vue"),
                    name:"",
                    meta:{
                      title:"学生信息",
                      icon:"",
                    }
                  }
              ],
        },
        {
          path:"/reading",
          component:Home,
          name:"reading",
              children:[
                  {
                    path:"/seat",
                    component:()=>import("@/components/Layout/Content/reading/Seat.vue"),
                    name:"座位管理"
                },
                 {
                    path:"/readingroom",
                    component:()=>import("@/components/Layout/Content/reading/ReadingRoom.vue"),
                    name:"阅览室"
                },
                  {
                    path:"/subreCard",
                    component:()=>import("@/components/Layout/Content/reading/SubReCard.vue"),
                    name:"学生座位预约记录"
                  }
              ],
        },
         {
          path:"/score",
          component:Home,
          name:"score",
              children:[
                  {
                    path:"/scoreindex",
                    component:()=>import("@/components/Layout/Content/score/index.vue"),
                    name:"",
                    meta:{
                      title:"信用积分信息",
                      icon:"",
                    }
                  }
          ],
        },
        {
          path:"/class",
          component:Home,
          name:"class",
              children:[
                {
                  path:"/classindex",
                  component:()=>import("@/components/Layout/Content/class/index.vue"),
                  name:"",
                  meta:{
                    title:"班级信息",
                    icon:"",
                  }
                }
              ],
        },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
