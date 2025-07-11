from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import menuViewSet
from .views import cartViewSet,viewUsersSet,CustomJWTView,SingleUserByEmail

router = DefaultRouter()
router.register(r'menu', menuViewSet)
router.register(r'cart',cartViewSet)
router.register(r'users',viewUsersSet)



urlpatterns = [
    path('', include(router.urls)),
    path('jwt/', CustomJWTView.as_view()),
    path('user/', SingleUserByEmail.as_view()),  # ✅ here
    
   
]
