from django.shortcuts import render
from .models import menu

from .serializers import menuSerializer,CartSerializer


from rest_framework import mixins, viewsets, status
from rest_framework.response import Response
from .models import Cart



from .models import Cart
# Create your views here.


class menuViewSet(viewsets.ModelViewSet):
    queryset=menu.objects.all()
    serializer_class=menuSerializer
    

class cartViewSet(
    mixins.CreateModelMixin,     # POST
    mixins.ListModelMixin,       # GET (list)
    mixins.RetrieveModelMixin,   # GET (detail)
    viewsets.GenericViewSet
):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def create(self, request, *args, **kwargs):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            return Response(
                {"insertedId": instance.id},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
