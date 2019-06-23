<template>
  <v-form v-model="form" ref="form" @submit.prevent="doLogin">
    <v-card class="elevation-11" width="400">
      <v-card-title>
        Login Vuejs Live
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="Usuario"
                          v-model="credenciais.username"
                          :rules="[v => !!v || 'Usuário obrigatorio']"/>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Senha"
                          type="password"
                          v-model="credenciais.password"
                          :rules="[v => !!v || 'Senha obrigatorio']"/>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" type="submit" :loading="loading">Entrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      credenciais: {},
      form: false,
      loading: false
    }
  },
  methods: {
    doLogin () {
      this.loading = true
      this.$store.dispatch('authLogin', this.credenciais).then(
        res => {
          this.loading = false
          this.$router.push('/instrutores')
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
