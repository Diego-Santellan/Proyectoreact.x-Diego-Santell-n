import ItemList2 from "./ItemList2";

const ItemListContainer = ( {greeting} ) => {
    return (
      <div>
        <h1> Hola {greeting}!</h1>
        <ItemList2/>
      </div>
     )
}
export default ItemListContainer;