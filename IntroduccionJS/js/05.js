//Objetos manipulacion
const obj={
    //key  //value
    nombre:"objeto",//propiedad
    valor:12,
    disponible:true
}

Object.seal(obj);//permite modificar las propiedades existentes pero no crear nuevas o eliminarlas


Object.freeze(obj);//no permite la manipulacion externa del obj 

//reescribir un valor dentro de un obj
obj.disponible=false;

//crear nueva propiedad
obj.img="img.jpg";

delete obj.nombre;

console.log(obj);

