import React from 'react'
import { Footer, Header } from '../../Components'
import useProducts from '../Hooks/useProducts'
import { Link } from 'react-router-dom'
import FetchId from '../../Fetching/FetchId'


const Home = () => {
  FetchId(1)
  const objeto= useProducts()
  console.log(objeto)
  
  return (
    <>
        <Header/>
        <main>
          {
            objeto.isLoading
            ? <h2>Cargando</h2>
            : <div>
              {
                objeto.products.map((producto)=>
                  {return(
                    <div key={producto.id}>
                      <h3>{producto.title} </h3>
                      <img src="" alt="" />
                      <span>Precio: {producto.price} </span>
                      <Link to={`/product/detail/${producto.id}`}> Ver detalle</Link>
                    </div>
                  )

                }
                )
              }
            </div>
          }
        </main>
        
    </>
  )
}

export default Home