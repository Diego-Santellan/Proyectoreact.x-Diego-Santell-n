import axios from "axios"
import { useEffect, useState } from "react"
import { useFavs } from "../../context/FavContext"
import { RickAndMortyCard } from "./RickAndMortyCard"



const RickAndMorty = () => {

    const [chars, setChars] = useState([])

    const {favs} = useFavs()

    useEffect(()=>{
        getChars()
    }, [])

  // AXIOS y ASYNC AWAIT
    const getChars = async () => { 
        const URL = 'https://rickandmortyapi.com/api/character'
        const res = await axios.get( URL )
        setChars(res.data.results)
    }

  return (
    <div>
      {/* {favs} paara agregar a favoritos */}
        {favs.map( f => <li>{f}</li>)}
        {chars.map( c => <RickAndMortyCard key={c.id} {...c}/>)}
    </div>
  ) 
}
export default RickAndMorty