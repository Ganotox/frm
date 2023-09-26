from django.contrib import admin
from django.urls import path
from Myforum import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('confirmation/', views.confirmation_view, name='confirmation'),
]
