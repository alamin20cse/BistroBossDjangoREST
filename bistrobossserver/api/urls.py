from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import menuViewSet

router = DefaultRouter()
router.register(r'menu', menuViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
