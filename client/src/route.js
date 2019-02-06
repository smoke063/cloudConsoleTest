import Vue from 'vue'
import Router from 'vue-router'

import AddData from './pages/AddData'
import Logs from './pages/Logs'
import DataView from './pages/DataView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/logs',
      name: 'logs',
      component: Logs//() => import(/* webpackChunkName: "logs" */'./components/Logs.vue')
    },
    {
      path: '/data',
      name: 'data',
      component: DataView//() => import(/* webpackChunkName: "dataView" */ './components/DataView.vue')
    },
    {
      path: '/addData',
      name: 'addData',
      component: AddData
    },
    {
      path: '*',
      redirect: '/addData'
    }
  ]
})
