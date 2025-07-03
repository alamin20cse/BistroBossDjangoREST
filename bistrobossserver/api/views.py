from django.shortcuts import render
from .models import menu
from rest_framework import viewsets
from .serializers import menuSerializer
# Create your views here.


class menuViewSet(viewsets.ModelViewSet):
    queryset=menu.objects.all()
    serializer_class=menuSerializer