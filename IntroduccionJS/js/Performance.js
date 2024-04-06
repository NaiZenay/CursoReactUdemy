const comments = 'https://jsonplaceholder.typicode.com/comments';
const todos= "https://jsonplaceholder.typicode.com/todos";

const consulta= async(url)=>{
    const inicio= performance.now();
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

    const fin = performance.now();
    console.log(fin-inicio);

}

const consultamultiple= async()=>{
    const inicio= performance.now();
    try{
        const [response,response2]= await Promise.all([fetch(comments),fetch(todos)]);
        const [data,data1]= await Promise.all([response.json(),response2.json()]);

        console.log(data);
        console.log(data1);
    }catch(err){
        console.log(err.message);
    }

    const fin = performance.now();
    console.log(fin-inicio);

}
consulta(comments);


consultamultiple();