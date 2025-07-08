from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import menuViewSet
from .views import cartViewSet

router = DefaultRouter()
router.register(r'menu', menuViewSet)
router.register(r'cart',cartViewSet)


urlpatterns = [
    path('', include(router.urls)),
   
]
