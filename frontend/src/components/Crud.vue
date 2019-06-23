<template>
  <div class="instrutores">
    <app-form
      :dialog="dialog"
      :form="form"
      :items="formItems"
      :api-save="acaoSalvar"
      url="api/instrutores/"
      @modal="dialog = $event"
      @atualizar="atualizar"
    />
    <app-listagem
      :headers="tableHeaders"
      :dados="dados"
      @editar="editarAqui"
      @remover="removerAqui"/>

    <v-btn
      fab
      bottom
      right
      color="primary"
      dark
      fixed
      @click="adicionar"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  props: {
    dados: {
      type: Array,
      required: true
    },
    carregadorDados: {
      type: String,
      required: true
    },
    acaoSalvar: {
      type: String,
      required: true
    },
    acaoRemover: {
      type: String,
      required: true
    },
    listaCampos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      form: {},
      headers: []
    }
  },
  computed: {
    tableHeaders () {
      return this.listaCampos.filter(f => typeof f.allowTable === 'undefined' ? true : f.allowTable)
    },
    formItems () {
      return this.listaCampos
        .filter(f => f.allowForm)
        .map(m => m.form)
    }
  },
  methods: {
    async carregar () {
      this.$store.dispatch(this.carregadorDados)
    },
    adicionar () {
      this.form = {
        id: 0
      }
      this.dialog = true
    },
    editarAqui (item) {
      this.form = item
      this.dialog = true
    },
    atualizar () {
      this.form = {}
      this.carregar()
    },
    async removerAqui (item) {
      if (confirm('Tem certeza que quer apagar?')) {
        try {
          await this.$store.dispatch(this.acaoRemover, item)
          this.carregar()
        } catch (e) {
          console.error(e)
        }
      }
    }
  },
  mounted () {
    this.carregar()
  }
}
</script>
