from rest_framework import serializers

from core.models import Instrutor, Curso, Conteudo


class InstrutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrutor
        fields = '__all__'


class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'


class ConteudoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conteudo
        fields = '__all__'
