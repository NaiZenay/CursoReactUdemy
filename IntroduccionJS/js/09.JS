//modificar arrays

const tecnologias=["HTML","CSS","JS"];

console.log(tecnologias);

//acceder a valor por indice
console.log(tecnologias[0]);


//Agregar elementos
tecnologias.push("React");

//Coopiar elemento de un arreglo en otro con spread operator
const Mastecnologias=[...tecnologias,"Spring"];
console.log(Mastecnologias);

//Eliminar el primer elemento de un arreglo
tecnologias.shift();

//filtrar elementos o elemento
const tecnologia= tecnologias.filter( tech => tech==="CSS");
console.log(tecnologia);

//copiar un array con map en otro
const tecnologiasCopia= tecnologias.map(tech=>tech);

//Remplazar un valor
const tecnologiasRemplazo= tecnologias.map(function(tech){
    if(tech!=='React'){
        return tech;
    }else{
        return "Node";
    }
});
console.log(tecnologiasRemplazo);


//Comprobar un valor
const valor=tecnologias.includes("React");
console.log(valor);

//Some - compueba si almenos un elemento cumple una condicion
//retorna un boolean
const nums=[12,22,32,42,52,62,72];
const mayor15= nums.some(num => num>15);
console.log(mayor15);

//Find - devuelve el primer elemento q cumpla un funcion
const resultado= nums.find(num=> num>30);
console.log(resultado);

//Every - retorna si todos los elementos cumplen una funcion
const mayor0= nums.every(nums => nums>0);
console.log(mayor0);


//reduce - Retorna el array reducido a un unico valor utilizando cada elemto de este
const total= nums.reduce((total,nums) => total+nums,0)
console.log(total);