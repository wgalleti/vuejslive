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
      <v-btn flat to="instrutores">
        Instrutores
      </v-btn>
      <v-btn flat to="cursos">
        Cursos
      </v-btn>
      <v-spacer></v-spacer>

    </v-toolbar>
    <slot></slot>
  </v-app>
</template>
