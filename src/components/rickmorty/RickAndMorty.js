import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const RickAndMortyCard = ({id, name, image}) => {
  return (
    // <div className="p-5 m-5 border-double border-8 border-emerald-500 hover:border-solid w-80 inline-block align-middle">
    //     <div className="flex flex-col items-center">
    //         <h3 className="p-2 uppercase text-purple-500">{name}</h3>
    //         <img src={image}/>
    //     </div>
    // </div>
    <Link to={`/ram/${id}`} className="inline-block align-middle m-5 ">
        <div className="card w-80 glass border-solid border-4 border-emerald-500 hover:border-double hover:border-purple-500 hover:border-4">
            <figure className="card w-64 glass m-5 place-self-center "><img src={image} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {/* <p>How to park your car at your garage?</p> */}
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    </Link>
                
  )
}

const RickAndMorty = () => {

    const [chars, setChars] = useState([])

    useEffect(()=>{
        getChars()
    }, [])

  // AXIOS y ASYNC AWAIT
    const getChars = async () => { 
        const URL = 'https://rickandmortyapi.com/api/character'
        const res = await axios.get( URL )
        setChars(res.data.results)
    }

  // AXIOS y Promise
    // const getChars = () => { 
    //     const URL = 'https://rickandmortyapi.com/api/character'
    //     axios.get( URL ).then(res => {
    //         console.log(res.data.results);
    //     })
    // }


  // ASYNC AWAIT
    // const getChars = async () =>{
    //     const URL = 'https://rickandmortyapi.com/api/character/?page=2'
    //     const res = await fetch( URL )
    //     const data = await res.json()
    //     setChars( data.results )
        

    // }

  // FECHT
    // const getChars = () => {
    //     const URL = 'https://rickandmortyapi.com/api/character'
    //     fetch(URL)
    //         .then( res => res.json() )
    //         .then( data => {
    //             console.log(data.results);
    //             setChars(data.results);
    //         })
    //         .catch( err => { console.log(err);} )
    // }

  return (
    <div>
        {chars.map( c => <RickAndMortyCard key={c.id} {...c}/>)}
    </div>
  ) 
}
export default RickAndMorty