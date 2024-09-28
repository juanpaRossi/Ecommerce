import React from 'react'

const FetchId = async (id) => {
    const result = await fetch('http://localhost:5173/data/products.json',
        {
            method: 'GET'
        }
    )
    const resultjson = await result.json()
    const productoBuscado = resultjson.find( producto=>producto.id === id); 
    console.log(productoBuscado)
    return (
        productoBuscado
    )
}

export default FetchId