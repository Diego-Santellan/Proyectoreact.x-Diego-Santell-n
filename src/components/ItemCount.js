import React from 'react'
import {useState} from "react";

const Itemcount = () => {
    
    const stockProduct = 5;

    const [counter, setCounter] = useState(0)

    const clickHandleradd = () => {  
        if( counter < stockProduct ){

            setCounter(prev => prev + 1);
        }else{
            alert("No es posible seguir ingrementando, la cantidad de este producto es limitada");
        }

    }
    const clickHandlersubtract=()=>{        
        if(counter>0){

            setCounter(prev => prev - 1);
        }else{
            alert("No es posible seguir decrementando la cantidad de este producto");
        }

    }


  return (
    <div className='border-double border-4 border-emerald-500 w-40 h-11 flex justify-between items-center'>
        <button onClick={clickHandleradd} className=' m-4 text-success'>+</button>
        <span className="m-5 countdown">
            {counter}
        </span>
        <button onClick={clickHandlersubtract} className='m-4 text-success'>-</button>
    </div>
  )
}

export default Itemcount