$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtiene los valores de usuario y contraseña del formulario
        var username = $('#username').val();
        var password = $('#password').val();

        // Envía los datos al servidor mediante una solicitud AJAX
        $.ajax({
            url: '/login', // URL de tu vista de inicio de sesión en Django
            type: 'POST',
            data: {
                'username': username,
                'password': password,
                'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val() // Token CSRF
            },
            success: function(response) {
                // Verifica la respuesta del servidor
                if (response.success) {
                    // Redirige al usuario a la página de piezas después de iniciar sesión con éxito
                    window.location.href = '/piezas'; // Cambia '/piezas' a la URL correcta
                } else {
                    alert('Inicio de sesión fallido. Por favor, verifica tus credenciales.');
                }
            }
        });
    });
});
