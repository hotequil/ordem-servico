import Vue from 'vue'
import Router from 'vue-router'
import CadastroHome from '@/view/CadastroHome.vue'
import ProducaoConcluido from '@/view/ProducaoConcluido.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CadastroHome',
      component: CadastroHome
    },
    {
      path: '/producao',
      name: 'ProducaoConcluido',
      component: ProducaoConcluido
    }
  ],
  mode: 'history'
})
