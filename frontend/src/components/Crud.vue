<template>
  <div class="instrutores">
    <app-form
      :dialog="dialog"
      :form="form"
      url="api/instrutores/"
      @modal="dialog = $event"
      @atualizar="atualizar"
    />

    <app-listagem
      :headers="headers"
      :dados="instrutores"
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
  data () {
    return {
      dialog: false,
      form: {},
      headers: [
        {
          text: '#',
          align: 'left',
          value: 'id'
        }, {
          text: 'Nome',
          align: 'left',
          value: 'nome'
        }, {
          text: 'Email',
          align: 'left',
          value: 'email'
        }, {
          text: 'Opçoes',
          align: 'center',
          value: ''
        }
      ]
    }
  },
  computed: {
    instrutores () {
      return this.$store.state.instrutores
    }
  },
  methods: {
    async carregar () {
      this.$store.dispatch('loadInstrutores')
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
        const { id } = item
        try {
          await axios.delete(`api/instrutores/${id}/`)
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
