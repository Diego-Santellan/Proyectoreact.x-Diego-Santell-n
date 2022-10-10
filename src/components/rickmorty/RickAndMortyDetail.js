import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const RickAndMortyDetail = () => {

  const {id} = useParams()
  const [char, setChar] = useState({})


  useEffect(() => {
    getChar()
  },[])

  const getChar = async () => { 
    const URL = 'https://rickandmortyapi.com/api/character/' + id
    const response = await axios.get( URL )
    console.log(response.data);
    setChar(response.data)
  }

  return (
    <>
      <div>Detalle del ID: {id}</div>
      <ul className="m-5 ">
        <li><img src={char.image}></img></li>
        <li>{char.name}</li>
        <li>{char.species}</li>
      </ul>
    </>
  )
}
export default RickAndMortyDetail