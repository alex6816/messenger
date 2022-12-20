from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'chatlist', views.GroupChatViewset)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.allchats, name='allchats'),
    path('<str:room_name>/', views.room, name='room'),
]
