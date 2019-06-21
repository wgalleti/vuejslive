<template>
  <div class="cursos">

    <app-listagem
      :headers="headers"
      :dados="cursos"
      :tem-crud="false"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Cursos',
  data () {
    return {
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
          text: 'Duração',
          align: 'left',
          value: 'duracao'
        }, {
          text: 'Instrutor',
          align: 'left',
          value: 'instrutor_display'
        }
        // {
        //   text: 'Opçoes',
        //   align: 'center',
        //   value: ''
        // }
      ]
    }
  },
  computed: {
    ...mapState(['cursos'])
  },
  methods: {
    ...mapActions(['loadCursos'])
  },
  mounted () {
    this.loadCursos()
  }
}
</script>

<style scoped>

</style>
