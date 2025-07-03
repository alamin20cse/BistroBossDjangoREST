from django.contrib import admin
from .models import menu

# Register your models here.
@admin.register(menu)
class menuAdmin(admin.ModelAdmin):
    list_display=['id','name','recipe','image','price','category']
