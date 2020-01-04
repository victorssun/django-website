from django.urls import path
from . import views

app_name = 'recipes'
urlpatterns = [
    path('', views.recipe_index, name='recipe_index'),
]
