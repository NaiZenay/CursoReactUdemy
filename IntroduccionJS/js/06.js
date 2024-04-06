//Destructuring de 2 o mas objs
const obj={
    //key  //value
    nombre:"objeto",//propiedad
    valor:12,
    disponible:true
}

const obj2={
    nombre:"Pedro",
    premium:false,
    direccion:{
        calle:"calle 123"
    }
}


const {nombre}=obj;//un obj

//destructuring de un obj dentro de otro 
const {
    nombre: nombreObj2 ,
    direccion:{calle}
}=obj2;


console.log(calle);

const cliente={
    nombre:"Juan",
    saldo:20000
}

const producto={
    nombre:"Tablet",
    precio:2222,
    comprador:cliente//asignas un obj dentro de otro

}

const carrito={
    cantidad:4,
    //asigna directamente las propiedades del objeto sin incluir el obj
    ...cliente//spread operator
}

console.log(producto);
console.log(carrito);


const objX=Object.assign(cliente,producto);

console.log(objX);
