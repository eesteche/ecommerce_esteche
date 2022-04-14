import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
const ItemDetail = ({ id, title, description, price, category, stock, pictureUrl }) => {

    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (count) => {
        setQuantity(count)        
        addItem({ id, title, description, price, category, stock, pictureUrl }, count)
    }

    return (
        <div className="container container-space">
            <div className="row">
                <div className="col-md-6">
                    <img className="DetailImg" src={pictureUrl} alt='' />
                </div>
                <div className="col-md-4">
                    <h1 className="my-4">{title}</h1>
                    <h2>$ {price}</h2>
                    <h4>Stock: {stock}</h4>
                    <h3 className="my-3">{description}</h3>
                    <br></br>
                    {quantity === 0 ? <ItemCount onAdd={handleOnAdd}/> : <Link to='/cart' className='Option'>Finalizar compra...</Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail