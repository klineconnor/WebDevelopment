from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    my_context = {
        'my_text': 'this is my text',
        'my_number': 123,
        'my_list': [123, 456, 789]
    }
    return render(request, "home.html", my_context)