import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        servicos: [
            {
                id: 0, 
                numeroOrdem: 453421, 
                nomeCliente: 'Joao', 
                telefoneCliente: 9999999,
                statusServico: 'Produção',
                observacao: 'feito manutencao na parada'
            },
            {
                id: 1, 
                numeroOrdem: 346345, 
                nomeCliente: 'Theo', 
                telefoneCliente: 9999999,
                statusServico: 'Produção',
                observacao: 'feito projeto'
            },
        ],
        servico: { statusServico: 'Escolha as opções' }
    },
    mutations: {
        adicionar (state, servico) {
            state.servicos.push(
                {
                    id: state.servicos.length,
                    ...servico
                }
            )
        },
        excluir (state, index){
            state.servicos.splice(index, 1);
        }
    }
});