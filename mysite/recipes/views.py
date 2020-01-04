from django.shortcuts import render, get_object_or_404
from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from recipes.models import Recipe, Ingredient

def recipe_index(request): 
	# collect all recipes
	#recipes = Recipe.objects.all()
	recipes = Recipe.objects.all().order_by('name')
	#recipes = Recipe.objects.all().filter(cuisine='Western')
	context = {
		'recipes': recipes
	}
	return render(request, 'recipe_index.html', context)