from rest_framework import serializers
from .models import menu,Cart,users

class menuSerializer(serializers.ModelSerializer):
    class Meta:
        model = menu
        fields = '__all__'  



class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'


class usersSerializer(serializers.ModelSerializer):
    class Meta:
        model=users
        fields = '__all__'
        