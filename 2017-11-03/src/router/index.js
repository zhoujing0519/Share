import Vue from 'vue'
import Router from 'vue-router'

import Phone from '@/components/phone/phone'
import Font from '@/components/font/font'
import Fontsize from '@/components/fontsize/fontsize'
import Handle from '@/components/handle/handle'
import Fixer from '@/components/fixer/fixer'
import StreamCom from '@/components/stream/stream'
import Pack from '@/components/pack/pack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    },{
      path: '/font',
      name: 'Font',
      component: Font
    },{
      path: '/fontsize',
      name: 'Fontsize',
      component: Fontsize
    },{
      path: '/handle',
      name: 'Handle',
      component: Handle
    },{
      path: '/fixer',
      name: 'Fixer',
      component: Fixer
    },{
      path: '/stream',
      name: 'Stream',
      component: StreamCom
    },{
      path: '/pack',
      name: 'Pack',
      component: Pack
    },
  ]
})
