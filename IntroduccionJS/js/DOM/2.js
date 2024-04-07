//manipular elementos html con js

const heading = document.querySelector('.heading');

heading.textContent="Nuevo heading";
heading.id=1;

heading.removeAttribute("id");

const input= document.querySelector("#nombre");
input.value="Ian";
input.dataset.nombre="inputNombre";

const enlaces = document.querySelectorAll("a");
enlaces.forEach(enlace => enlace.textContent="enlace");