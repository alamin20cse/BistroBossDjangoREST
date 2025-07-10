from django.shortcuts import render


from .serializers import menuSerializer,CartSerializer


from rest_framework import mixins, viewsets, status
from rest_framework.response import Response
from .models import Cart,users,menu

from rest_framework import status
from rest_framework import mixins, viewsets, status
# views.py

from rest_framework.views import APIView


from rest_framework_simplejwt.tokens import RefreshToken



from .serializers import CartSerializer,usersSerializer



# Create your views here.


class menuViewSet(viewsets.ModelViewSet):
    queryset=menu.objects.all()
    serializer_class=menuSerializer
    



class cartViewSet(
    mixins.CreateModelMixin,     # POST
    mixins.ListModelMixin,       # GET (list)
    mixins.RetrieveModelMixin,   # GET (detail)
    mixins.DestroyModelMixin,    # DELETE
    mixins.UpdateModelMixin,     # PUT / PATCH
    viewsets.GenericViewSet
):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get_queryset(self):
        # List view তে শুধু ইমেইল অনুযায়ী ফিল্টার করবে
        if self.action == 'list':
            email = self.request.query_params.get('email')
            if email:
                return Cart.objects.filter(email=email)
            return Cart.objects.none()
        
        # Detail actions (retrieve, destroy, etc.) এর জন্য সব ডেটা
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
        """
        Custom delete method to return consistent response for frontend
        """
        try:
            instance = self.get_object()
            item_id = instance.id
            self.perform_destroy(instance)
            return Response(
                {
                    "success": True,
                    "message": "Item deleted successfully",
                    "deletedCount": 1,
                    "deletedId": item_id
                },
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {
                    "success": False,
                    "message": "Failed to delete item",
                    "error": str(e)
                },
                status=status.HTTP_400_BAD_REQUEST
            )

    def perform_destroy(self, instance):
        instance.delete()



class viewUsersSet(viewsets.ModelViewSet):
    queryset=users.objects.all()
    serializer_class=usersSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response({"deletedCount": 1}, status=status.HTTP_200_OK)

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()

        # ধরলাম আপনি admin বানাতে চাইছেন
        instance.role = 'admin'
        instance.save()

        return Response({
            "message": f"{instance.name} is now admin.",
            "modifiedCount": 1
        }, status=status.HTTP_200_OK)





class CustomJWTView(APIView):
    def post(self, request):
        email = request.data.get('email')

        if not email:
            return Response({"detail": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        # Ensure the user exists in your DB
        user, created = users.objects.get_or_create(email=email, defaults={"name": "Unnamed"})

        # Generate token
        refresh = RefreshToken.for_user(user)

        return Response({
            'token': str(refresh.access_token),
        }, status=status.HTTP_200_OK)


    