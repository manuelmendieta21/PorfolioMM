       // Verificar si el token existe al cargar la página
       document.addEventListener('DOMContentLoaded', function() {
        const token = localStorage.getItem('token');
    
        if (!token) {
            // Si no hay token, redirigir al usuario a la página de login
            alert('Acceso denegado. Debes iniciar sesión.');
            window.location.href = 'index.html';
        } else {
            // Token existe, puedes continuar con la lógica de la página
            console.log('Token encontrado, acceso permitido.');
            // Aquí puedes llamar a tus APIs y enviar el token en los headers
        }
    });