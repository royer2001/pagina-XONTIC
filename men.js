document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation feedback (in a real app, this would send data to a server)
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if(nombre && email && mensaje) {
        alert('Gracias por tu mensaje, ' + nombre + '. Nos pondremos en contacto contigo pronto.');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
