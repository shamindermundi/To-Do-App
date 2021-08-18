from django.db import models


class ToDo(models.Model):
    title = models.CharField(max_length=225)
    description = models.TextField(blank=True, null=True)
    is_done = models.BooleanField(default=False)
    data_added = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title

    # this function added to return json data without converting the query set
    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'isDone': self.is_done,
            'createdAt': str(self.data_added)
        }

    @property
    def is_not_done(self):
        return not self.is_done
