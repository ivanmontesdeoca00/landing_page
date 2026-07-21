document.addEventListener("DOMContentLoaded", () => {
    const origenSelect = document.getElementById('origen');
    const destinoSelect = document.getElementById('destino');
    const alertaCiudades = document.getElementById('alerta-ciudades');
    const btnCalcular = document.getElementById('btn-calcular');
    const formCotizar = document.getElementById('cotizar-form');

    // Funcion para validar en tiempo real si las ciudades chocan
    function validarCiudades() {
        if (origenSelect.value && destinoSelect.value) {
            if (origenSelect.value === destinoSelect.value) {
                // Mostrar alerta roja y bloquear boton
                alertaCiudades.classList.remove('ocultar-alerta');
                btnCalcular.disabled = true;
                btnCalcular.style.opacity = '0.5';
                btnCalcular.style.cursor = 'not-allowed';
            } else {
                // Ocultar alerta y habilitar boton
                alertaCiudades.classList.add('ocultar-alerta');
                btnCalcular.disabled = false;
                btnCalcular.style.opacity = '1';
                btnCalcular.style.cursor = 'pointer';
            }
        }
    }

    // Escuchar cada vez que el usuario cambie de ciudad
    origenSelect.addEventListener('change', validarCiudades);
    destinoSelect.addEventListener('change', validarCiudades);

    // lohica principal de calculo al enviar el formulario
    formCotizar.addEventListener('submit', function(e) {
        e.preventDefault();

        const peso = parseFloat(document.getElementById('peso').value);
        const origen = origenSelect.value;
        const destino = destinoSelect.value;
        
        // el valor seleccionado del radio button "Frágil"
        const fragil = document.querySelector('input[name="fragil"]:checked').value;

        if (origen !== destino) {
            // Precio base: 5000 + 1000 por kg
            let precio = 5000 + (peso * 1000);
            
            // Si es fragil, sube 1.5x mas
            if (fragil === 'Si') {
                precio = precio * 1.5;
            }
            
            // Muestra el precio formateado y descubre el recuadro
            document.getElementById('precio').innerText = '$' + precio.toLocaleString('es-CL');
            document.getElementById('resultado').classList.remove('d-none');
        } else {
            
            alert("El origen y destino no pueden ser iguales.");
            document.getElementById('resultado').classList.add('d-none');
        }
    });
});