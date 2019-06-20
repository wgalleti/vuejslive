<template>
  <div class="instrutores">
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title>
          Formulário de instrutores
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                prepend-icon="business"
                placeholder="Nome"
                v-model="form.nome"
                :auto-focus="true"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="email"
                placeholder="Email"
                v-model="form.email"
              ></v-text-field>
            </v-flex>
          </v-layout>

        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="dialog = false" :disabled="aguardando">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" :loading="aguardando" @click="salvar">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-data-table
      :headers="headers"
      :items="instrutores"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.nome }}</td>
        <td>{{ props.item.email }}</td>
        <td class="text-sm-center">
          <v-icon
            small
            class="mr-2"
            @click="editar(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="remover(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>

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
import axios from '../plugins/axios'

const url = 'api/instrutores/'
export default {
  data () {
    return {
      dialog: false,
      aguardando: false,
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
      ],
      instrutores: []
    }
  },
  methods: {
    async carregar () {
      this.instrutores = await axios.get(url).then(res => res.data)
    },
    adicionar () {
      this.form = {
        id: 0
      }
      this.dialog = true
    },
    editar (item) {
      this.form = item
      this.dialog = true
    },
    async remover (item) {
      if (confirm('Tem certeza que quer apagar?')) {
        const { id } = item
        try {
          await axios.delete(`${url}${id}/`)
          this.carregar()
        } catch (e) {
          console.error(e)
        }
      }
    },
    async salvar () {
      this.aguardando = true
      // Adicionando
      if (this.form.id === 0) {
        try {
          await axios.post(url, this.form)
          this.aguardando = false
          this.dialog = false
          this.carregar()
        } catch (e) {
          console.error(e)
        }
      } else {
        const { id } = this.form
        // api/instrutores/ID/
        try {
          await axios.patch(`${url}${id}/`, this.form)
          this.aguardando = false
          this.dialog = false
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
