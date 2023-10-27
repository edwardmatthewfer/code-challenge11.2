document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const url = 'https://jsonplaceholder.typicode.com/users';

    const nombre = document.querySelector("input[name=nombre]").value;
    const apellido = document.querySelector("input[name=apellido]").value;
    const fechaNacimiento = document.querySelector("input[name=fechaNacimiento]").value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta exitosa:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
