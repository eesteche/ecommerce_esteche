import react from 'react'
import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import { getProducts } from "../../articulosmock"

const ItemList = ({ }) => {
    const [products, setProducts] = useState([])

    const itemStock = 5;
    const onAdd = (quantity) => {
        if (itemStock > 0) {
            console.log("El item se puede comprar, hay: " + itemStock + " en stock.")
        } else {
            console.log("No podemos vender lo que no tenemos.")
        }

    }

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response);
        })
    }, [])

    console.log("llego: " + products[0]);

    if (products === undefined) {
        return null;
    } else {
        return (
            <div className="card-deck">

                <div className="col">
                    <div className="row row-cols-1 row-cols-md-5 g-3">
                        {products.map(p => <Item initial={1} stock={itemStock} onAdd={onAdd} product={p} />)}
                    </div >
                </div>

            </div>

        )
    }

}

export default ItemList