
import { useState, useEffect } from "react"
import { Header } from "./Components/Header"
import Guitar from "./Components/Guitar"
import { db } from "./Components/data/db";
//hook

function App() {
  //state simpre retorna un arreglo
  //no van dentro de estructuras
  //state   funcion  valor inicial
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  //simpre retorna un callback
  // useEffect(() => {

  // }, [])

  function addToCart(item){
    const itemExist=cart.findIndex(guitar => guitar.id===item.id );
      console.log(itemExist);
      setCart((prevState)=>[...prevState,item]);

  }

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarARR) =>
            <Guitar
              key={guitarARR.id}
              guitar={guitarARR}
              addToCart={()=>addToCart(guitarARR)}
            />
          )}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
