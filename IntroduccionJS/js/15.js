//optional chaining (?)
const alumno={
    nombre:"Juan",
    apellido:"Perez"
}

console.log(alumno.nombre);
console.log(alumno.examenes?.examenMate);//compueba q exista la propiedad del objeto antes de realizar la operacion y evita q en vez de lanzar un error simplemente imprima undefined
console.log(alumno.apellido);


//nullish coolescing operator (??)
//operador logico 
        //null o undefined     entonces   toma este valor
const pagina= 100               ??          1;
        //!null o ! undefined  enotonces  no toma este valor
        