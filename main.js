document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    actualizarIconoTema(savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            actualizarIconoTema(newTheme);
        });
    }


    const origenSelect = document.getElementById('origen');
    const destinoSelect = document.getElementById('destino');
    const alertaCiudades = document.getElementById('alerta-ciudades');
    const btnEnviar = document.getElementById('btn-enviar');

    function validarCiudades() {
        if (origenSelect.value && destinoSelect.value) {
            if (origenSelect.value === destinoSelect.value) {
                // Si son iguales: Mostrar alerta y bloquear botón
                alertaCiudades.classList.remove('ocultar-alerta');
                btnEnviar.disabled = true;
                btnEnviar.style.opacity = '0.5';
                btnEnviar.style.cursor = 'not-allowed';
            } else {
                // Si son distintas: Ocultar alerta y habilitar botón
                alertaCiudades.classList.add('ocultar-alerta');
                btnEnviar.disabled = false;
                btnEnviar.style.opacity = '1';
                btnEnviar.style.cursor = 'pointer';
            }
        }
    }

    if (origenSelect && destinoSelect) {
        origenSelect.addEventListener('change', validarCiudades);
        destinoSelect.addEventListener('change', validarCiudades);
    }
});


function actualizarIconoTema(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (theme === 'light') {
            themeIcon.className = "bi bi-moon"; 
        } else {
            themeIcon.className = "bi bi-sun-fill"; 
        }
    }
}