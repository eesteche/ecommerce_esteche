import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    

    return (

        <div className="card">
            <img src={product.pictureUrl} className={styles["card-img-top"]} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}.</p>
            </div>
            <div className="card-footer">
                <div className={styles["footer-wrapper"]}>
                    <p>Stock disponible: {product.stock}</p>                    
                    <Link to={`/item/${product.id}`} className='btn btn-secondary'>Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item