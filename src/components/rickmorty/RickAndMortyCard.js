import { Link } from "react-router-dom"

export const RickAndMortyCard = ({id, name, image}) => {
  
    return (
  
      <Link to={`/ram/${id}`} className="inline-block align-middle m-5 ">
          <div className="card w-80 glass border-solid border-4 border-emerald-500 hover:border-double hover:border-purple-500 hover:border-4">
              <figure className="card w-64 glass m-5 place-self-center "><img src={image} alt="car!"/></figure>
              <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <div className="card-actions justify-end">
                  <button className="btn btn-primary">Más detalles</button>
                  </div>
              </div>
          </div>
      </Link>
                  
    )
  }