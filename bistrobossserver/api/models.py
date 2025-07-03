from django.db import models

# Create your models here.

class menu(models.Model):
    name=models.CharField(max_length=200)
    recipe=models.TextField()
    image=models.URLField()
    price=models.DecimalField(max_digits=6,decimal_places=2)
    category=models.CharField(max_length=100)

