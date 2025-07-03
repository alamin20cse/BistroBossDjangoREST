from rest_framework import serializers
from .models import menu

class menuSerializer(serializers.ModelSerializer):
    class Meta:
        model = menu
        fields = '__all__'  
