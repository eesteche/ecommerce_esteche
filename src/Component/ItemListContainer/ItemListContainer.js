import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from "../../articulosmock"
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (categoryId) {
            setLoading(true)

            getProductsByCategory(categoryId).then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)

            getProducts().then(item => {
                setProducts(item)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }

        return (() => {
            setProducts([])
        })
    }, [categoryId])

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