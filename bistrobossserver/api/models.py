from django.db import models

# Create your models here.

class menu(models.Model):
    name=models.CharField(max_length=200)
    recipe=models.TextField()
    image=models.URLField()
    price=models.DecimalField(max_digits=6,decimal_places=2)
    category=models.CharField(max_length=100)




class Cart(models.Model):
    menu_id = models.CharField(max_length=100)  # ID from frontend
    name = models.CharField(max_length=200)
    image = models.URLField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    email = models.EmailField()
    added_at = models.DateTimeField(auto_now_add=True)


class users(models.Model):
    name=models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50, default='user')  # default user, can be 'admin'

   