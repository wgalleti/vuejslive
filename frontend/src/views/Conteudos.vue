<template>
  <app-crud
    :dados="$store.state.conteudos"
    carregadorDados="loadConteudos"
    acaoSalvar="salvarConteudo"
    acaoRemover="removerConteudo"
    :lista-campos="campos"/>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('loadCursos')
  },
  computed: {
    ...mapState(['cursos']),
    campos () {
      return [
        {
          text: '#',
          align: 'left',
          value: 'id',
          allowForm: false
        }, {
          text: 'Url do Video',
          align: 'left',
          value: 'video_url',
          allowForm: true,
          form: {
            type: 'v-text-field',
            prependIcon: 'link',
            rules: [
              v => !!v || 'URL é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Comentário',
          align: 'left',
          value: 'comentario',
          allowForm: true,
          form: {
            type: 'v-textarea',
            prependIcon: '',
            rules: [
              v => !!v || 'Comentário é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Curso',
          align: 'left',
          value: 'curso_display',
          allowForm: false
        }, {
          text: 'Curso',
          align: 'left',
          value: 'curso',
          allowForm: true,
          allowTable: false,
          form: {
            type: 'v-select',
            items: this.cursos,
            itemText: 'nome',
            itemValue: 'id',
            prependIcon: 'menu',
            rules: [
              v => !!v || 'Curso é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Opçoes',
          align: 'center',
          value: '',
          allowForm: false
        }
      ]
    }
  }
}
</script>
