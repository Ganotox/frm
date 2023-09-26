from django.shortcuts import render, redirect
from .forms import RegistrationForm

def home(request):
    return render(request, 'home.html')

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            # Можно добавить логику редиректа или отображения успешной регистрации
            return redirect('home')  # Пример редиректа на домашнюю страницу
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})

def confirmation_view(request):
    return render(request, 'confirmation.html')