import { useState, useEffect } from 'react'
import { getProductById } from '../../articulosmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);    

    useEffect(() => {        
        if (id) {
            setLoading(true)

            getProductById(id).then(prod => {
                setProduct(prod)
            }).catch(err => {
                console.log(err)
            }).finally(() => {                
                setLoading(false)
            })
        }
        return (() => {
            setProduct([])
        })
    }, [id])   

    if (loading) {

        return <div className={styles.ItemDetailContainer}>
            <h1>Cargando...</h1>
        </div>
    }

    if (product.length === 0) {
        return <div className={styles.ItemDetailContainer}>
            <h1>El producto no existe...</h1>
        </div>
    }
    
    const onAdd = (quantity) => {
        if (product.stock > 0) {
            console.log("El item se puede comprar, hay: " + product.stock + " en stock.")
        } else {
            console.log("No podemos vender lo que no tenemos.")
        }

    }

    return(
        <div className={styles.ItemDetailContainer}>
            <ItemDetail initial={1} stock={product.stock} onAdd={onAdd} p={product} />
        </div>
    )

}

export default ItemDetailContainer