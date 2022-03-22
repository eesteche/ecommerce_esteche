import styles from './Item.module.css'
import { useState } from 'react'

const Item = ({ initial = 0, onAdd, product }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < product.stock && product.stock > 0) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (product.stock > 0 && count > 1) {
            setCount(count - 1);
        } else if (count === 1) {
            console.log("borraria este item del carrito");
        }

    }

    return (

        <div className="card">
            <img src={product.pictureUrl} className={styles["card-img-top"]} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}.</p>
            </div>
            <div className="card-footer">
                <div className={styles["footer-wrapper"]}>
                    <p>Cantidad: {count} Stock disponible: {product.stock}</p>
                    <button className="btn btn-secondary" onClick={decrement}>-</button>
                    <button className="btn btn-secondary" onClick={increment}>+</button>
                    <button className="btn btn-success" onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Item