import styles from './ItemListContainer.module.css'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../Services/Firebase/firestore'
import { useAsync } from '../../hooks/useAsync'
import { useParams } from 'react-router-dom'
import { useNotification } from '../../notification/notification'

const ItemListContainer = ({ }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    const {setNotification} = useNotification();

    useAsync(
        setLoading, 
        () => getProducts(categoryId), 
        setProducts, 
        () => setNotification('error', 'Hubo un error al cargar los productos'), 
        [categoryId]
    )
    if (loading) {

        return <div className={styles.products}>
            <h1 className={styles["greeting"]}>Cargando...</h1>
        </div>
    }

    if (products.length === 0) {
        return <div className={styles.products}>
            <h1 className={styles["greeting"]}>No hay productos en la categoría...</h1>
        </div>
    }

    if (products === undefined) {
        return null;
    } else {
        return (
            <div>

                <div className={styles.products}>
                    <h1 className={styles["greeting"]}>¡Bienvenidos!</h1>
                </div>

                <ItemList products={products} />
            </div>

        )
    }

}

export default ItemListContainer