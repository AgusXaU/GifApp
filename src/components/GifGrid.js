import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'

export const GifGrid = ({categoria}) => {

   const {loading,data} = useFetchGif(categoria);
    
    return (
        <>
            <h2>{categoria}</h2>
            {loading&&<h2 className='animate__animated animate__flash'>Cargando...</h2>}
            <div className='contenedor-carta'>
                    {
                        data.map( ({id, titulo, url}) =>(
                            <div key={id} className='carta animate__animated animate__bounceInRight'>
                                <img src={url} alt={titulo} width='205rem' height='230rem'/>
                                <p><b>{titulo}</b></p>
                            </div>
                        ))
                    }
            </div>
        </>
    )
}
