from django.contrib import admin
from .models import ToDo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'is_done', 'data_added')


admin.site.register(ToDo, TodoAdmin)
