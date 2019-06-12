from django.db import models


class Instrutor(models.Model):
    nome = models.CharField(max_length=50)
    email = models.EmailField()


class Curso(models.Model):
    nome = models.CharField(max_length=50)
    duracao = models.IntegerField()
    instrutor = models.ForeignKey(to='core.Instrutor', on_delete=models.DO_NOTHING)


class Conteudo(models.Model):
    curso = models.ForeignKey(to='core.Curso', on_delete=models.CASCADE)
    video_url = models.CharField(max_length=255)
    comentario = models.TextField(null=True, blank=True)
