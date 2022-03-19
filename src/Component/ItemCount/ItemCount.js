import { useState } from 'react'
import styles from './ItemCount.module.css'
const ItemCount = ({ initial = 0, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock && stock > 0) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if(stock > 0 && count > 1){
            setCount(count - 1);    
        }else if (count == 1){
            console.log("borraria este item del carrito");
        }
        
    }

    return (

        <div className="futurosProductos">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://resizer.glanacion.com/resizer/vdMt8W2tiCtytunKnq-CoVRzYZs=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/37HACYHRQ5AD3NFSD7HQLSY56U" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Futuro Nombre Producto</h5>
                            <p className="card-text">Futuro Descripcion Producto.</p>
                        </div>
                        <div className="card-footer">
                            <div className={styles["footer-wrapper"]}>
                            <p>Cantidad: {count} Stock disponible: {stock}</p>
                                <button className="btn btn-secondary" onClick={decrement}>-</button>                                
                                <button className="btn btn-secondary" onClick={increment}>+</button>
                                <button className="btn btn-success" onClick={() => onAdd(count)}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ItemCount