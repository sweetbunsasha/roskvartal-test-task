import Vue from 'vue'
import Router from 'vue-router'

import Navbar from '~/components/Navbar'
import rules from '~/components/rules'
import agreement from '~/components/agreement'
import instruction from '~/components/instruction'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Navbar
      },
      {
        path: '/rules',
        component: rules
      },
      {
        path: '/agreement',
        component: agreement
      },
      {
        path: '/instruction',
        component: instruction
      }
    ]
  })
}
