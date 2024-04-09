
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

  function addToCart(item) {
    const itemExist = cart.findIndex(guitar => guitar.id === item.id);
    if (itemExist >= 0) {
      console.log("Ya existe");
      const updCart = [...cart];
      updCart[itemExist].quantyty++;
      setCart(updCart);
    } else {
      item.quantyty = 1;
      setCart((prevState) => [...prevState, item]);
      console.log("No existe agregando");
    }
  }
  function removeFromCart(id) {
    setCart(prevState => prevState.filter(cartItem => cartItem.id !== id))
  }
  function increaseQuantity(id){
    const updCart=cart.map((item)=>{
      if(item.id===id){
        return {
          ...item,
          quantyty:item.quantyty+1
        }
      }
      return item;
    })
    setCart(updCart)
  }

  function cleanCart(){
    setCart([])
  }

  function decrementQuantity(id){
    const updCart=cart.map((item)=>{
      if(item.id===id && item.quantyty>1){
        return {
          ...item,
          quantyty:item.quantyty-1
        }
      }
      return item;
    })
    setCart(updCart)
  }


  return (
    <>
      <Header
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decrementQuantity={decrementQuantity}
        cleanCart={cleanCart}

        cart={cart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarARR) =>
            <Guitar
              key={guitarARR.id}
              guitar={guitarARR}
              addToCart={() => addToCart(guitarARR)}
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
