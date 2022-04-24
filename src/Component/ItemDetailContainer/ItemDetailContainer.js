import { useState } from 'react'
import { getProductById } from '../../Services/Firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import styles from './ItemDetailContainer.module.css'
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../notification/notification'

const ItemDetailContainer = ({addToCart, cart}) => {
    const {setNotification} = useNotification();
    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);    

    useAsync(
        setLoading, 
        () => getProductById(id), 
        setProduct, 
        () => setNotification('error', 'El producto no existe'), 
        [id]
    )

    if (loading) {

        return <div className={styles.ItemDetailContainer}>
            <h1>Cargando...</h1>
        </div>
    }

    if (product === undefined ) {
        return <div className={styles.ItemDetailContainer}>
            <h1>El producto no existe...</h1>
        </div>
    }
    
    return(
        <div className={styles.ItemDetailContainer}>
            <ItemDetail {...product} addToCart={addToCart} cart={cart} />
        </div>
    )

}

export default ItemDetailContainer