from django.urls import path, include
from rest_framework import routers
from . import views

urlpatterns = [
    path('', views.userlist, name='userlist'),
    path('<str:username>/', views.privatechat, name='privatechat'),
]
