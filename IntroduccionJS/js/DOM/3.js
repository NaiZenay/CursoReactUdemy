//eventos
const heading = document.querySelector('.heading');
heading.addEventListener('click',() => console.log('click en heading'));
heading.addEventListener('mouseenter',() => heading.classList.remove("font-black"));

const enlaces = document.querySelectorAll("a");
enlaces.forEach(enlace => enlace.addEventListener("click",(e)=>{
    e.preventDefault();
    e.target.textContent="diste click"
    console.log('click en enlace');
}));