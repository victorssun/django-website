from django.db import models
from django.utils import timezone
import datetime


# Create your models here.

class Recipe(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    course = models.CharField(max_length=200)
    cuisine = models.CharField(max_length=200)
    img = models.ImageField(upload_to='imgs/')
    date_modified = models.DateField('date modified')

class Ingredient(models.Model):
	recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
	item = models.CharField(max_length=200)
	amount = models.CharField(max_length=200)