from django.contrib import admin

from .models import Recipe, Ingredient

# Register your models here.

admin.site.site_url = "xxxxxxxxxxxxxx" # will this work when deployed?

class IngredientInline(admin.TabularInline):
	model = Ingredient
	extra = 3

class IngredientAdmin(admin.ModelAdmin):
	list_display = ('item', 'amount')

class RecipeAdmin(admin.ModelAdmin):
	fieldsets = [
		('General', {'fields': ['name', 'description', 'cuisine', 'course', 'img', 'date_modified']}),
	]
	list_display = ('name', 'cuisine', 'course', 'date_modified')
	list_filter = ['course', 'cuisine', 'date_modified']
	inlines = [IngredientInline]

admin.site.register(Recipe, RecipeAdmin) # make app modifiable by admin
admin.site.register(Ingredient, IngredientAdmin)