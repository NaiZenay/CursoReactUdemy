//Objetos
const obj={
    //key  //value
    nombre:"objeto",//propiedad
    valor:12,
    disponible:true
}

// formas de mostrar en la consola los objetos

console.log(obj);
console.table(obj);

//acceder a un valor con la sintaxis de .
console.log(obj.disponible);


//Destructuring
// const nombre= obj.nombre;

const{nombre,valor,disponible}=obj;


//Object literal enhacement
const autenticado=true;
const usuario="juan";

//Pasa el valor de una variable con el mismo nombre q la key
const newObj={
    autenticado,
    usuario
}


