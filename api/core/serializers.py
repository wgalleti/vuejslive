from rest_framework import serializers

from core.models import Instrutor, Curso, Conteudo


class InstrutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrutor
        fields = '__all__'


class CursoSerializer(serializers.ModelSerializer):
    instrutor_display = serializers.SerializerMethodField()

    def get_instrutor_display(self, curso: Curso):
        return curso.instrutor.nome.title()

    class Meta:
        model = Curso
        fields = '__all__'


class ConteudoSerializer(serializers.ModelSerializer):
    curso_display = serializers.SerializerMethodField()

    def get_curso_display(self, conteudo: Conteudo):
        return conteudo.curso.nome.title()

    class Meta:
        model = Conteudo
        fields = '__all__'
