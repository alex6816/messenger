from .models import *
from rest_framework import serializers


class GroupChatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GroupChat
        fields = ['name']