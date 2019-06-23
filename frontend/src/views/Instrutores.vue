<template>
  <app-crud
    :dados="$store.state.instrutores"
    carregadorDados="loadInstrutores"
    acaoSalvar="salvarInstrutor"
    acaoRemover="removerInstrutor"
    :lista-campos="campos"/>
</template>

<script>
export default {
  data () {
    return {
      campos: [
        {
          text: '#',
          align: 'left',
          value: 'id',
          allowForm: false
        }, {
          text: 'Nome',
          align: 'left',
          value: 'nome',
          allowForm: true,
          form: {
            type: 'v-text-field',
            prependIcon: 'people',
            rules: [
              v => !!v || 'Nome é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Email',
          align: 'left',
          value: 'email',
          allowForm: true,
          allowTable: false,
          form: {
            type: 'v-text-field',
            prependIcon: 'email',
            rules: [
              v => !!v || 'Email é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Opçoes',
          align: 'center',
          value: '',
          allowForm: false
        }
      ]
    }
  }
}
</script>
