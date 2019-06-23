<template>
  <v-dialog v-model="modal" persistent max-width="400">
    <v-form @submit.prevent="salvar" ref="form" v-model="validateForm">
      <v-card>
        <v-card-title>
          Formulário de instrutores
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              <v-alert
                type="error"
                :value="true"
                v-if="erro"
              >
                Ocorreu um erro ao salvar o registro!
              </v-alert>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <template v-for="item in items">
              <v-flex xs12 :key="item.vModel">
                <component :is="item.type" v-bind="item" v-model="form[item.modelo]"></component>
              </v-flex>
            </template>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="modal = false" :disabled="aguardando">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" :loading="aguardando" type="submit">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    apiSave: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      modal: false,
      aguardando: false,
      validateForm: false,
      erro: false,
      rule: {}
    }
  },
  methods: {
    async salvar () {
      if (this.$refs.form.validate()) {
        this.aguardando = true
        try {
          await this.$store.dispatch(this.apiSave, this.form)
          this.aguardando = false
          this.modal = false
        } catch (e) {
          console.error(e)
          this.erro = true
          this.aguardando = false
        }
      }
    }
  },
  watch: {
    dialog (value) {
      this.modal = value
      if (!value) {
        this.$emit('atualizar')
        this.$refs.form.resetValidation()
        this.erro = false
      }
    },
    modal (value) {
      this.$emit('modal', value)
    }
  }
}
</script>
