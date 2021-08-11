from django.db import models


class ToDo(models.Model):
    title = models.CharField(max_length=225)
    description = models.TextField(blank=True, null=True)
    is_done = models.BooleanField(default=False)
    data_added = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title
