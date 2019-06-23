<template>
  <v-data-table
    :headers="headers"
    :items="dados"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td
        v-for="h in headers.filter(f => f.value !== '')"
        :key="h.value"
      >
        {{ props.item[h.value] }}
      </td>
      <td class="text-sm-center" v-if="temCrud">
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
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    dados: {
      type: Array,
      required: true
    },
    temCrud: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    editar (item) {
      this.$emit('editar', item)
    },
    remover (item) {
      this.$emit('remover', item)
    }
  }
}
</script>

<style scoped>

</style>
