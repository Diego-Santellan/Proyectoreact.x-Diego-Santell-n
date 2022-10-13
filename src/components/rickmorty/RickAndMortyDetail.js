import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Itemcount from "../ItemCount"
import { useFavs } from "../../context/FavContext"


const RickAndMortyDetail = () => {

  const {id} = useParams()
  const [char, setChar] = useState({})

  const { add, favs } = useFavs( )


  useEffect(() => {
    getChar()
  },[])

  const getChar = async () => { 
    const URL = 'https://rickandmortyapi.com/api/character/' + id
    const response = await axios.get( URL )
    setChar(response.data)
  }

  const addHandler = () =>{
    add(char.name);
    console.log(add, favs);
  }

  return (
      <>
        <div className="w-100 flex justify-center m-16 ">

          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img className="w-96" src={char.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{char.name}</h2>
              <ul>
                <li>Species: {char.species}</li>
                <li>Gender: {char.gender}</li>
                <li>Status: {char.status}</li>
              </ul>
              <div className="mt-52 card-actions justify-end">
                <Itemcount/>
                <button className="btn ml-6 btn-primary">Add to cart</button>
                <button onClick={addHandler} className="btn ml-6 btn-primary">Add to favorites</button>
              </div>
            </div>
          </div>

        </div>
      </>
  )
}
export default RickAndMortyDetail