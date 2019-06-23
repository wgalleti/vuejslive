<template>
  <component :is="template">
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </component>
</template>

<script>

export default {
  computed: {
    template () {
      return this.$store.getters['estaLogado'] ? 'template-admin' : 'template-publico'
    }
  },
  created () {
    const token = localStorage.getItem('token')
    this.$store.commit('SET_TOKEN', token === 'null' ? null : token)
  }
}
</script>
