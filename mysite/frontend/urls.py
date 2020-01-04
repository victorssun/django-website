from django.urls import path
from . import views

app_name = 'frontend'
urlpatterns = [
	path('', views.HomePageView.as_view(), name='home'),
	path('main', views.HomePageView2.as_view(), name='main'),
]
