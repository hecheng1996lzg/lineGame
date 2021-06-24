import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Index = () => import('../components/index/index');
const Login = () => import('../components/login/login');
const Kana = () => import('../components/kana/kana');
const Kana_Welcome = () => import('../components/kana/welcome/welcome');
const Kana_Start = () => import('../components/kana/start/start');
const Kana_Rank = () => import('../components/kana/rank/rank');
const Word = () => import('../components/word/word');
const WordList = () => import('../components/word-list/word-list');


const vueRouter = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/kana',
      redirect: '/kana/welcome',
      component: Kana,
      children: [
        {
          path: 'welcome',
          component: Kana_Welcome
        },
        {
          path: 'start/:model1/:model2',
          name: 'start',
          component: Kana_Start,
          props: true
        },
        {
          path: 'rank/:score/:time',
          name: 'rank',
          component: Kana_Rank,
          props: true
        }
      ]
    },
    {
      path: '/word',
      component: Word,
    },
    {
      path: '/word-list/:selectCourses',
      name: 'word-list',
      component: WordList,
      props: true
    }
  ]
});

vueRouter.beforeResolve((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('nihongo'));
  if (!user && to.path !== '/login') {
    next('/login');
  } else if (user && to.path === '/login') {
    next(from.path);
  } else {
    next();
  }

});

export default vueRouter;