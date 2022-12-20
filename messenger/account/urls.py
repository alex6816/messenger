from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'members', views.MemberViewset)

urlpatterns = [
    path('register/', views.registerUser, name="signup"),
    path('login/', views.loginUser, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('profile/', views.personalSettings, name="profile"),

    path('', include(router.urls)),
]
