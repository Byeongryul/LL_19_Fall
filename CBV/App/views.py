from django.shortcuts import render
from django.utils import timezone

from django.urls import reverse_lazy
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import ClassBlog

def welcome(request):
    return render(request, 'welcome.html')

# Create your views here.
class BlogView(ListView):       # html 템플릿 : 블로그 리스트를 담은 html : (소문자모델)_list.html
    template_name = 'App/list.html'
    context_object_name = 'blog_list'
    model = ClassBlog

class BlogCreate(CreateView):   # html : form (입력공간)을 갖고있는 html : (소문자모델)_form.html
    model = ClassBlog
    fields = ['title', 'body']
    success_url = reverse_lazy('list')

class BlogDetail(DetailView):   # html : 상세 페이지를 담은 html :  : (소문자모델)_detail.html
    context_object_name = 'blogpost'
    model = ClassBlog

class BlogUpdata(UpdateView):   # html : form (입력공간)  : (소문자모델)_form.html
    model = ClassBlog
    fields = ['title', 'body']
    success_url = reverse_lazy('list')

class BlogDelete(DeleteView):   # html 템플릿 : 블로그 리스트를 담은 html :  : (소문자모델)_confirm_delete.html
    model = ClassBlog
    success_url = reverse_lazy('list')

