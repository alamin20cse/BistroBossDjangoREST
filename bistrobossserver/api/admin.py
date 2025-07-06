from django.contrib import admin
from .models import menu
from .models import Cart

# Register your models here.
@admin.register(menu)
class menuAdmin(admin.ModelAdmin):
    list_display=['id','name','recipe','image','price','category']

@admin.register(Cart)
class cartAdmin(admin.ModelAdmin):
    list_display=   list_display = ['id', 'menu_id', 'name', 'email', 'price', 'added_at']
