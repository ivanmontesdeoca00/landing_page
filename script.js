document.addEventListener('DOMContentLoaded', () => {
    

    const tema = document.getElementById('theme-toggle');
    const html = document.documentElement;

    tema.addEventListener('click', () => {
        const cambio = html.getAttribute('data-bs-theme');
        if (cambio === 'dark') {
            html.setAttribute('data-bs-theme', 'light');
            tema.textContent = 'Oscuro'; 
        } else {
            html.setAttribute('data-bs-theme', 'dark');
            tema.textContent = 'Claro'; 
        }
    });


    const formularioTracking = document.getElementById('tracking-form');
    const resultadoTracking = document.getElementById('tracking-result');

    formularioTracking.addEventListener('submit', (e) => {
        e.preventDefault();
        resultadoTracking.classList.remove('d-none');
        console.log("Buscando paquete: " + document.getElementById('tracking-input').value);
    });

    const formularioContacto = document.getElementById('contact-form');
    
    formularioContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Solicitud enviada, prontamente van a estar contactandose, muchas gracias.');
        formularioContacto.reset();
    });
});