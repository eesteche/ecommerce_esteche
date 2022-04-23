import { useState } from 'react'
import { useNotification } from '../../notification/notification'

const ItemCount = ({ onAdd , maxStock }) => {
    const [count , setCount] = useState(1);
    const { setNotification } = useNotification();

    const increment = () => {
        if(count< maxStock){
            setCount(count + 1)
        }else{
            setNotification('Error', 'El stock máximo es: '+ maxStock);
        }
    }
    const decrement = () => {
        if(count >= 2){
            setCount(count - 1)
        }        
    }

    return(
        <div>
            <button className="btn btn-secondary btn-sm" onClick={decrement}>-</button>            
            <button className="btn btn-secondary btn-sm" onClick={increment}>+</button>
            <p>{count}</p>
            <button className="btn btn-primary btn-sm" onClick={() => onAdd(count)}>Agregar al carrito</button>            					
        </div>
    )
}

export default ItemCount