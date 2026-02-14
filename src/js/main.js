// Este archivo contiene el código JavaScript para manejar la lógica de los formularios, como la validación y la interacción del usuario.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            let isValid = true;

            // Validación de campos
            formData.forEach((value, key) => {
                const input = form.querySelector(`[name="${key}"]`);
                if (input && !value) {
                    isValid = false;
                    input.classList.add('error');
                } else if (input) {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Aquí se puede manejar el envío del formulario
                console.log('Formulario enviado con éxito');
            } else {
                console.log('Por favor, complete todos los campos requeridos.');
            }
        });
    }
});