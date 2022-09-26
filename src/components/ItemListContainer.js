const ItemListContainer = ({age, greeting}) => {
    const style={
        border:'solid red 2px',
        padding:'10px',
        
    }
    return (
    <span style={style}>Hola {greeting}!</span>
    
  )
}

export default ItemListContainer