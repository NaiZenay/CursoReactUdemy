//promises
const url = 'https://jsonplaceholder.typicode.com/comments';


/*
Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/comments', redirected: false, status: 200, ok: true, …}
body:(...)
bodyUsed:false
headers: Headers {}
ok: true
redirected: false
status: 200   -> codigo de respuesta de http       100-199 codigo informativo   200-299 codigo de exito   300-399 codigo de redireccion  400-499 codigo de error del cliente  500-599 codigo de error del servidor
statusText: ""
type:"cors"
url: "https://jsonplaceholder.typicode.com/comments"  -> origen de la respuesta
[[Prototype]]: Response
*/


fetch(url)
    .then((response) =>  response.ok ? response.json() : new Error('Hubo un error'))
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
