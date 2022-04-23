import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { useNotification } from '../../notification/notification'

const ItemDetail = ({ id, title, description, price, category, stock, pictureUrl }) => {

    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (count) => {
        setQuantity(count)
        addItem({ id, title, description, price, category, stock, pictureUrl }, count)
        setNotification('success', 'Se agregaron correctamente los productos al carrito');
    }

    return (
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">

                            <div className="preview-pic tab-content">
                                <img alt='' src={pictureUrl} />
                            </div>
                            <ul className="preview-thumbnail nav nav-tabs">
                            </ul>

                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{title}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="review-no"> 41 reviews</span>
                                </div>

                            </div>
                            <p className="product-description">{description}</p>
                            <h4 className="price">Precio: <span>US$ {price}</span></h4>
                            <div className="action">
                                {quantity === 0 ? <ItemCount onAdd={handleOnAdd} maxStock={stock} /> : <Link to='/cart' className='Option'>Finalizar compra...</Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemDetail