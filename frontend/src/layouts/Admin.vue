<template>
  <v-app>
    <v-toolbar
      flat
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      fixed
    >
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vuejs Live</span>
      </v-toolbar-title>
      <v-btn flat to="/">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat :to="menu.path" v-for="menu in menus" :key="menu.path">
        {{menu.name}}
      </v-btn>
      <v-spacer></v-spacer>

    </v-toolbar>
    <slot></slot>
  </v-app>
</template>

<script>
export default {
  computed: {
    menus () {
      return this.$router.options.routes.filter(f => f.path !== '/')
    }
  }
}
</script>
