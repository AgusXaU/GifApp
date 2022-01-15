import React from 'react';
import { useState } from 'react';

export const AddCategoria = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState(['']);
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.length > 1){
             setCategorias(category =>[inputValue, ...category]);
            setInputValue('');
        }
    }  
    return (
        <> 
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleInputChange} />
            </form>
        </>
       
    )
}
