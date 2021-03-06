import React ,{useState} from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

 export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['One Punch']);

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategoria setCategorias={setCategorias} />
            <hr/>
            <ol>
                {
                    categorias.map(categoria =>(
                        <GifGrid 
                        key={categoria} 
                        categoria={categoria}
                        {...categoria}
                        />
                    ))
                }
            </ol>
        </>
    )
}
