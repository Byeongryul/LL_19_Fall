from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# django rest framework -> router -> url

router = DefaultRouter()
router.register('app', views.PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]