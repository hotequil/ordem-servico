<template>
    <div id="home-container">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputNroOrdem4">Número de Ordem:</label>
                <input type="number" v-model="servico.numeroOrdem" class="form-control" id="inputNroOrdem4" placeholder="Digite o número de ordem">
                </div>
                <div class="form-group col-md-6">
                <label for="inputNome4">Nome do Cliente:</label>
                <input type="text" v-model="servico.nomeCliente" class="form-control" id="inputNome4" placeholder="Digite o nome do cliente">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputTelefone4">Telefone do Cliente:</label>
                <input type="number" v-model="servico.telefoneCliente" class="form-control" id="inputTelefone4" placeholder="Digite o telefone do cliente">
                </div>
                <div class="form-group col-md-6">
                <label for="inputState">Status do Serviço:</label>
                <select id="inputState" v-model="servico.statusServico" class="form-control">
                    <option selected disabled>Escolha as opções</option>
                    <option>Produção</option>
                    <option>Concluído</option>
                </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12 blue-border-focus">
                    <label for="exampleFormControlTextarea5">Observações do Serviço:</label>
                    <textarea v-model="servico.observacao" class="form-control textarea-style" id="exampleFormControlTextarea5" rows="3" placeholder="Digite o que será feito no serviço"></textarea>
                </div>
            </div>
            <button type="submit" @keyup.enter="adicionaServico()" @click.prevent="adicionaServico()" class="btn btn-primary btn-style">Enviar Serviço</button>
            <router-link class="btn btn-primary btn-style" to="producao" tag="button">Ir para Produção</router-link>
        </form>
    </div>
</template>


<script>
import { store } from '@/view/store';

    export default {
        name: 'CadastroHome',
        data () {
            return {
                servico: { statusServico: 'Escolha as opções' }
            }
        },
        methods: {
            adicionaServico() {
                store.commit('adicionar', this.servico);
                this.servico = { statusServico: 'Escolha as opções' };
            }
        }
    }
</script>

<style>
    #home-container{
        width: 60%;
        margin: 5% 20% 0% 20%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .btn-style{
        margin-right: 1%;
    }

    .textarea-style{
        resize: none;
        padding-bottom: 30px;
    }
</style>