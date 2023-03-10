from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import groupchat.routing
import privatechat.routing

application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(
            [*groupchat.routing.websocket_urlpatterns,
             *privatechat.routing.websocket_urlpatterns]
        )
    ),
})