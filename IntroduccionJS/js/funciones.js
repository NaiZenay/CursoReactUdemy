
//formas de exportar funciones


/*export*/ function sumar (num1,num2){
    return num1+num2;
}

function restar (num1,num2){
    return num1-num2;
}

//export deafult (solo uno por archivo)

export default function multiplicar (num1,num2){
    return num1*num2;
}


export {
    sumar,
    restar
}