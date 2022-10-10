import React from 'react'
import {useState} from "react";

const Clicker = () => {
    
    const stockProduct = 5;

    const [conuter, setCounter] = useState(0)

    const clickHandleradd = () => {  
       
            setCounter(conuter + 1);

    }


  return (
    <div className='border-double border-4 border-emerald-500 w-40 h-11 flex justify-between items-center'>
        <button onClick={clickHandleradd} className=' m-4 text-success'>+</button>
        <span className="m-5 countdown">
            {conuter}
        </span>
        
    </div>
  )
}

export default Clicker