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
            <v-flex xs12>
              <v-text-field
                prepend-icon="people"
                placeholder="Nome"
                v-model="form.nome"
                :rules="rule.nome"
                :auto-focus="true"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="email"
                placeholder="Email"
                :rules="rule.email"
                v-model="form.email"
              ></v-text-field>
            </v-flex>
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
import axios from '../plugins/axios'

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
    url: {
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
        // Adicionando
        if (this.form.id === 0) {
          try {
            await axios.post(this.url, this.form)
            this.aguardando = false
            this.modal = false
          } catch (e) {
            console.error(e)
            this.erro = true
            this.aguardando = false
          }
        } else {
          const { id } = this.form
          // api/instrutores/ID/
          try {
            await axios.patch(`${this.url}${id}/`, this.form)
            this.aguardando = false
            this.modal = false
          } catch (e) {
            console.error(e)
            this.erro = true
            this.aguardando = false
          }
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
