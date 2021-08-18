import json
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404

from .models import ToDo


def test(request):
    return HttpResponse("<h1> Test api </h1>", content_type="text/html")


# Return data in a class format
class TaskGetController(View):

    def get(self, request):
        queryset = ToDo.objects.all()
        payload = list(item.to_json() for item in queryset)

        # return HttpResponse(json.dumps(payload), content_type="application/json")
        return JsonResponse(payload, safe=False)

    def post(self, request):
        payload = json.loads(request.body)
        print(payload)
        return HttpResponse(status=200)

        # Return data in a class format


class TaskEditController(View):

    def get(self, request, id):
        queryset = get_object_or_404(ToDo, pk=id)
        payload = (queryset.to_json())
        # payload = list(item.to_json() for item in queryset)
        return JsonResponse(payload, safe=False)

    def post(self, request):
        payload = json.loads(request.body)
        print(payload)
        return HttpResponse(status=200)


class TaskDeleteController(View):

    def post(self, request):
        pass
        # payload = json.loads(request.body)


# Return data in a fucntion
def get_all_tasks(request):
    queryset = ToDo.objects.all()
    payload = []
    for item in queryset:
        plain_item = {
            'id': item.id
        }
        payload.append(plain_item)
    return JsonResponse({'items': payload})
