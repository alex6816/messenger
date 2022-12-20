from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.parsers import JSONParser

from .serializers import *


def allchats(request):
    return render(request, 'allchats.html', {})


def room(request, room_name):
    return render(request, 'chatroom.html', {
        'room_name': room_name
    })


class GroupChatViewset(viewsets.ModelViewSet):
    queryset = GroupChat.objects.all()
    parser_classes = [JSONParser]
    serializer_class = GroupChatSerializer
