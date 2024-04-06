//la imporatcion de funciones con la palabrada reservada export deben llevar el mismo nombre en la importacion
                //darle un alias a la funcion para evitar colision de nombres
import { restar,        sumar as funcionSumar }                     from "./funciones.js";

//importar un export default (se puede nombrar de culaquier forma)
import multiplicar from "./funciones.js";

//modulos de ECMAscript
console.log(funcionSumar(2,3));

console.log(restar(2,3));

console.log(multiplicar(1,2));