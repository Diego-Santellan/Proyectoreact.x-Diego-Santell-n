import React, { useContext } from 'react'
import {useState} from "react";
import { DarkModeContext } from '../context/DarkModeContext';

const Clicker = () => {

  const DarkMode = useContext (DarkModeContext)
    
    const stockProduct = 5;

    const [counter, setCounter] = useState(0)

    const clickHandleradd = () => {  
       
            setCounter(counter + 1);

    }


  return (
    <div className='border-double border-4 border-emerald-500 w-40 h-11 flex justify-between items-center'>
        <button onClick={clickHandleradd} className=' m-4 text-success'>+</button>
        <span className="m-5 countdown">
            {counter}
        </span>
        <div className='m-80'>
          <strong>DarkMode:_{DarkMode ? 'Activado' : 'Desactivado'}</strong>
        </div>
    </div>
  )
}

export default Clicker