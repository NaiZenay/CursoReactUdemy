//iterando Arrays
const tecnologias = ["HTML", "CSS", "JS"];

for (let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i]);
}

//Foreach
console.log('Iteracion por Foreach');
tecnologias.forEach(function(tecnologia){
    console.log(tecnologia);
});

//Map
console.log('Iteracion por Map');
const techMap=tecnologias.map(function(tecnologia){
    return(tecnologia);
});
console.log(techMap);

//ForOf
console.log("Iteracion con For of");
for(let tech of tecnologias){
    console.log(tech);
}