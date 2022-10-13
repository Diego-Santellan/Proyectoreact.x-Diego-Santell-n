import { useContext, useEffect, useState } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

const StarWarsContainer = () => {

    const [people, setPeople] = useState([])

    
    const DarkMode = useContext (DarkModeContext)


    useEffect(()=>{
        getPeople()
    },[])

    const getPeople = () => { 
        const URL ='https://swapi.dev/api/people/?page=3'
        fetch( URL )
            .then( response => response.json())
            .then( data =>{
                console.log(data.results);
                setPeople(data.results)
            })
    }


  return (
    <div>
        <h1>StarWarsContainer</h1>
        { people.map( p => <li key={p.url}> {p.name} </li> ) }
    
        <div className="m-8">
          <strong>DarkMode:_{DarkMode ? 'Activado' : 'Desactivado'}</strong>
        </div>
    </div>
  )
}
export default StarWarsContainer