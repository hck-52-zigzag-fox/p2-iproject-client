import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaymentView from "../views/PaymentView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileGirlfriend from '../views/ProfileGirlfriend.vue'
import RegisterView from "../views/RegisterView.vue";
import Chat from '../component/Inbox.vue'
import  MyChat from '../views/MyChat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path:'/myChat',
      name:"mychat",
      component : MyChat,
      children:[
        {
          path:':id',
          name:'roomChat',
          component:Chat
        }
      ]
    },
    {
      path :'/profile',
      name:'myProfile',
      component : ProfileGirlfriend
    },
    {
      path: "/payment/:id",
      name: "payment",
      component: PaymentView,
    },
  ],
});

router.beforeEach((to,from) => {
  if((to.name == "mychat"  || to.name == 'myProfile' || to.name == "payment" || to.name == 'home') && !localStorage.access_token){
    return {name:"login"}
  }else if(to.name == 'login' && localStorage.access_token){
    return {name:"home"}
  } 
})

export default router;
