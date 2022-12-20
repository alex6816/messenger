from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/private/(?P<id>\w+)/$', consumers.PersonalChatConsumer.as_asgi()),
]