from rest_framework import viewsets
from .serializers import TodoSerializer

from .models import ToDo


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = ToDo.objects.all()
