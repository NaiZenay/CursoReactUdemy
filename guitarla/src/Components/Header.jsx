//Librerias

import { useMemo } from "react";

//componente
function Header({ cart,removeFromCart,increaseQuantity,decrementQuantity,cleanCart}) {
    //codigo de js
    //use Memo
    //Evita que se renderize de nuevo la aplicacion a menos de que se cambien ciertas propiedades q especificas en su funcion
    const cartIsEmpty = useMemo(() => cart.length === 0,[cart]);
    
    //State derivado (cuando el valor de un estado es calculado por un prop u otro estado en un componente )
    const cartTotal= () => cart.reduce((total,item)=>total+(item.quantyty*item.price),0); 

    //codigo html
    //solo debe retornar un elemento
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">

                                {cartIsEmpty ?
                                    (<p className="text-center">El carrito esta vacio</p>)
                                    :
                                    (
                                        <>
                                            <table className="w-100 table">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(cart.map(guitar => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                                </td>
                                                                <td>{guitar.name}</td>
                                                                <td className="fw-bold">
                                                                    ${guitar.price}
                                                                </td>
                                                                <td className="flex align-items-start gap-4">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-dark"
                                                                        onClick={()=>decrementQuantity(guitar.id)}

                                                                    >
                                                                        -
                                                                    </button>
                                                                    {guitar.quantyty}
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-dark"
                                                                        onClick={()=>increaseQuantity(guitar.id)}

                                                                    >
                                                                        +
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-danger"
                                                                        type="button"
                                                                        onClick={()=>removeFromCart(guitar.id)}
                                                                    >
                                                                        X
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }))}

                                                </tbody>
                                            </table>
                                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal()}</span></p>
                                        </>
                                    )
                                }



                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={cleanCart} >Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )


    //formas de retornar un fragment (remplazo de divs)

    /*

    import {Fragment} from 'react'
    <Fragment></Fragment>

    <React.Fragment></React.Fragment>

    <>
    </>

    */
}

export {
    Header
}
