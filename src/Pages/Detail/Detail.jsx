import React from 'react'
import { Footer, Header } from '../../Components'
import { useParams } from 'react-router-dom'

const Detail = () => {
  
  const {product_id}=useParams()
  console.log(product_id)
  return (
    <>
        <Header/>
        <main>
            Contenido de detail
        </main>
        <Footer/>
    </>
  )
}

export default Detail