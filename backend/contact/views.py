from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Consultation
from .serializers import ConsultationSerializer

@api_view(['POST'])
def consultation_form(request):
    if request.method == 'POST':
        serializer = ConsultationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)