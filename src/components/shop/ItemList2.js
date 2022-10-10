import { useEffect, useState } from "react"
import Item from "./Item"


const products = [
    {id: 1, title:'mouse', description:'...', price:'20', pictureUrl:'...' },
    {id: 2, title:'teclado', description:'...', price:'30', pictureUrl:'...'},
    {id: 3, title:'monitor', description:'...', price:'250', pictureUrl:'...'},
]

const ItemList2 = () => {    

    const [items, setItems] = useState([])
    
    useEffect( ()=>{
         getProduts().then( res => {
            setItems( res )
        })
        .catch( err => {
            console.log('err: ' + err);
        })
    }, [])

    const getProduts = () => {
        return new Promise( (resolve)=>{
            setTimeout( ()=>{
                resolve( products )
            }, 3000)
        } )
    }

    return (
        <div>
            <h1>Componente ItemList2</h1>
            {items.map( item => <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList2



