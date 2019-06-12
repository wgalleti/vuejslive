from rest_framework import viewsets

from core.models import Instrutor, Curso, Conteudo
from core.serializers import InstrutorSerializer, CursoSerializer, ConteudoSerializer


class InstrutorViewSet(viewsets.ModelViewSet):
    queryset = Instrutor.objects.all()
    serializer_class = InstrutorSerializer


class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer


class ConteudoViewSet(viewsets.ModelViewSet):
    queryset = Conteudo.objects.all()
    serializer_class = ConteudoSerializer
