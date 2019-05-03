<template>
    <div id="producao-container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Número de Ordem</th>
                    <th scope="col">Nome do Cliente</th>
                    <th scope="col">Telefone do Cliente</th>
                    <th scope="col">Status do Serviço</th>
                    <th scope="col">Observações do Serviço</th>
                    <th scope="col">Excluir</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="finalizado(servico)" v-bind:style="{ backgroundColor: servico.statusServico === 'Concluído' ? 'green' : 'white' }" v-for="(servico, index) in servicos" :key="servico.id">
                    <th scope="row">{{ servico.id }}</th>
                    <td>{{ servico.numeroOrdem }}</td>
                    <td>{{ servico.nomeCliente }}</td>
                    <td>{{ servico.telefoneCliente }}</td>
                    <td>{{ servico.statusServico }}</td>
                    <td>{{ servico.observacao }}</td>
                    <td><button @click="excluirServico(index)" class="btn btn-primary btn-style btn-danger">Excluir</button></td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary btn-style" to="/" tag="button">Voltar para Cadastro</router-link>
    </div>
</template>

<script>
    import { store } from '@/view/store';

    export default {
        name: 'ProducaoConcluido',
        methods: {
            finalizado (servico) {
                if (servico.statusServico === 'Concluído') {
                    servico.statusServico = 'Produção';
                } else {
                    servico.statusServico = 'Concluído';
                }
            },
            excluirServico (index) {
                store.commit('excluir', index)
            }
        },
        computed: {
            servicos () {
                return store.state.servicos;
            }
        }
    }
</script>

<style>
    #producao-container{
        width: 80%;
        margin: 5% 10% 0% 10%;
    }

</style>
