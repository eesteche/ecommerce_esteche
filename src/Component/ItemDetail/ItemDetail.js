import './ItemDetail.css';
import { useState } from 'react'

const ItemDetail = ({ initial = 0, onAdd, p }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < p.stock && p.stock > 0) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (p.stock > 0 && count > 1) {
            setCount(count - 1);
        } else if (count === 1) {
            console.log("borraria este item del carrito");
        }

    }
    return (
        <div class="container container-space">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-fluid" src={p.pictureUrl} alt="" />
                </div>
                <div class="col-md-4">
                    <h1 class="my-4">{p.title}</h1>
                    <h2>$ {p.price}</h2>
                    <h3 class="my-3">
                        <svg width="36" height="36" viewBox="0 0 24 24">
                            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                        </svg>
                         
                    </h3>
                    <h4>Stock: {p.stock}</h4>                    
                    <h3 class="my-3">{p.description}</h3>
                    <h4>Cantidad: {count}  </h4>
                    <button className="btn btn-secondary" onClick={decrement}>-</button>
                    <button className="btn btn-secondary" onClick={increment}>+</button>
                    <button className="btn btn-success" onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail