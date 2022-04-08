import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products }) => {

    return (
        <div className="card-deck">

            <div className="col">
                <div className="row row-cols-1 row-cols-md-5 g-3">
                    {products.map(p => <Item key={p.id}  product={p} />)}
                </div >
            </div>

        </div>
    )
}

export default ItemList