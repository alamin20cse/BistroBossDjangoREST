from django.shortcuts import render
from .models import menu

from .serializers import menuSerializer,CartSerializer


from rest_framework import mixins, viewsets, status
from rest_framework.response import Response
from .models import Cart



# Create your views here.


class menuViewSet(viewsets.ModelViewSet):
    queryset=menu.objects.all()
    serializer_class=menuSerializer
    



class cartViewSet(
    mixins.CreateModelMixin,     # POST
    mixins.ListModelMixin,       # GET (list)
    mixins.RetrieveModelMixin,   # GET (detail)
    mixins.DestroyModelMixin,    # DELETE
    mixins.UpdateModelMixin,     # PUT / PATCH (update)
    viewsets.GenericViewSet
):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get_queryset(self):
        # Only filter by email for list action
        if self.action == 'list':
            email = self.request.query_params.get('email')
            if email:
                return Cart.objects.filter(email=email)
            return Cart.objects.none()
        
        # For detail actions (retrieve, update, destroy), return all objects
        # so items can be found by their ID
        return Cart.objects.all()


    def create(self, request, *args, **kwargs):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            return Response(
                {"insertedId": instance.id},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()  # ডিলিট করার অবজেক্ট টা পাই
        deleted_id = instance.id
        self.perform_destroy(instance)  # ডিলিট অপারেশন
        return Response(
            {"deletedId": deleted_id},
            status=status.HTTP_200_OK
        )
