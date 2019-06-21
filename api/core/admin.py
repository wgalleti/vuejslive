from django.contrib import admin

from .models import Instrutor, Curso, Conteudo

admin.site.register(Instrutor)
admin.site.register(Curso)
admin.site.register(Conteudo)
