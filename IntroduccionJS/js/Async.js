

const url = 'https://jsonplaceholder.typicode.com/comments';

const consulta= async()=>{
    try{
        const response= await fetch(url);
        if(!response.ok){
            throw new Error("Hubo un error...")
        }
        const data= await response.json();
        console.log(data);
    }catch(err){
        console.log(err.message);
    }
    
}


consulta();