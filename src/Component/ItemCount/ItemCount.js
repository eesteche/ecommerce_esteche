import { useState } from 'react'

const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(0)


    const increment = () => {
        setCount(count + 1)

    }
    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <button className="btn btn-secondary" onClick={decrement}>-</button>            
            <button className="btn btn-secondary" onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount