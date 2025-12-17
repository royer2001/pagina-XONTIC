document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation feedback
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

// Dark Mode Toggle Logic
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference and update icon
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
        toggleButton.textContent = '☀️';
    } else {
        localStorage.setItem('dark-mode', 'false');
        toggleButton.textContent = '🌙';
    }
});
