from rest_framework import routers

from core.views import InstrutorViewSet, CursoViewSet, ConteudoViewSet

router = routers.DefaultRouter(trailing_slash=True)

router.register('instrutores', InstrutorViewSet)
router.register('cursos', CursoViewSet)
router.register('conteudos', ConteudoViewSet)

urlpatterns = router.urls
