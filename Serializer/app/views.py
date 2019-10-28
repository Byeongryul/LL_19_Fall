from rest_framework import viewsets # viewsets 이 편함
from .models import Post
from .serializer import PostSerializer
# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer