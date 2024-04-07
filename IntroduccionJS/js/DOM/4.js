//validacion de formularios
const inputNombre = document.querySelector("#nombre");
const inputPassword = document.querySelector("#password");

inputNombre.addEventListener("input", () => { console.log('escribiendo....') })

inputPassword.addEventListener("input", (e) => {
    if (e.target.value.length >= 4) {
        inputPassword.type = "password";
    } else {
        inputPassword.type = "text";
    }
});


const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputNombre.value === "" || inputPassword.value === "") {
        crearAlerta("Todos los campos son obligatorios");
    } else {
        crearAlerta("Iniciando sesion....");
    }

});

function crearAlerta(mensaje) {
    prevenirHTML("alerta","class");
    const divAlerta = document.createElement("DIV");
    divAlerta.classList.add("alerta", "text-black", "uppercase", "text-sm", "text-center", "p-2", "font-black");
    divAlerta.textContent = mensaje;
    formulario.appendChild(divAlerta);

    setTimeout(() => {
        divAlerta.remove();
    }, 2000);
}

function prevenirHTML(selector, tipoSelector) {
    let selectortype;
    switch (tipoSelector) {
        case "id":
            selectortype = '#';
            break;

        case "class":
            selectortype = ".";
            break;
        default:
            selectortype = '';
            break;
    }
console.log(`${selectortype}${selector}`);
    const elemento = document.querySelector(`${selectortype}${selector}`);
    console.log(elemento);
    elemento?.remove();
}