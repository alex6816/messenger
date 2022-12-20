from django.db import models


class GroupChat(models.Model):
    name = models.CharField(max_length=255, null=False, primary_key=True, unique=True)

    def __str__(self):
        return self.name



