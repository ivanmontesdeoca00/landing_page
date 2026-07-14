document.getElementById('cotizar-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = document.getElementById('peso').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    // Logica del calculo de peso (Precio base 5000 + 1000 por kg)
    if(origen !== destino) {
        const precio = 5000 + (peso * 1000);
        document.getElementById('precio').innerText = '$' + precio;
        document.getElementById('resultado').classList.remove('d-none');
    } else {
        alert("El origen y destino no pueden ser iguales.");
    }
});