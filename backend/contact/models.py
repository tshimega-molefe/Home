from django.db import models

# Create your models here.
class Consultation(models.Model):
    full_name = models.CharField(max_length=64)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=12)
    company_size = models.CharField(max_length=12)
    services = models.CharField(max_length=32)
    other = models.TextField()

    def __str__(self):
        return f'{self.full_name} - {self.services}' 
    