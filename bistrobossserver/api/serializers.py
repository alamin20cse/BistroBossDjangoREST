from rest_framework import serializers
from .models import menu,Cart

class menuSerializer(serializers.ModelSerializer):
    class Meta:
        model = menu
        fields = '__all__'  



class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'