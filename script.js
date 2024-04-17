document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí se debería verificar los datos de entrada con una base de datos o API, para este ejemplo se hará una redirección simple.
    window.location.href = 'dashboard.html';
});
