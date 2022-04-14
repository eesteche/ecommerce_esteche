import { useContext } from "react"
import CartContext from '../../Context/CartContext'
import './Cart.css';
import { NavLink} from 'react-router-dom'
const Cart = () => {

    const { cart,
        clearCart,
        getQuantity,
        getCartTotal,
        increaseQuantity,
        decreaseQuantity,
        removeProduct } = useContext(CartContext)

    return (

        <div className="row justify-content-center m-0">
            <div className="col-md-8 mt-5 mb-5">
                <div className="card">
                    <div className="card-header bg-dark p-3">
                        <div className="card-header-flex">
                            <h5 className="text-white m-0">Checkout Carrito {getQuantity() > 0 ? `(${getQuantity()})` : ''}</h5>
                            {
                                cart.length > 0 ? <button className="btn btn-danger mt-0 btn-sm" onClick={() => clearCart()}><i className="fa fa-trash-alt mr-2"></i><span>Vaciar Carrito</span></button> : ''}
                        </div>
                    </div>
                    <div className="card-body p-0">
                        {
                            getQuantity() === 0 ?

                                <table className="table cart-table mb-0">
                                    <tbody>
                                        <tr>
                                            <td colSpan="6">
                                                <div className="cart-empty">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    <p>El carrito está vacío</p>
                                                    <NavLink to={'/'} > Buscar mas productos... </NavLink>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                :

                                <table className="table cart-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Accion</th>
                                            <th>Producto</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th className="text-right"><span id="amount" className="amount">Subtotal</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((data, index) => {
                                                const { id, title, description, price, category, stock, pictureUrl, quantity } = data;
                                                return (
                                                    <tr key={index}>
                                                        <td><button className="product-delete" onClick={() => removeProduct(index)}><i className="fa fa-trash"></i></button></td>
                                                        <td><div className="product-img"><img className="product-img" src={pictureUrl} alt="" /></div></td>
                                                        <td><div className="product-name"><p>{title}</p></div></td>
                                                        <td>${price}</td>
                                                        <td>
                                                            <div className="product-qty-container">
                                                                <button className="product-qty-btn" type="button" onClick={() => decreaseQuantity(index)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                                <input type="text" name="qty" className="qty-input-box" value={quantity} disabled />
                                                                <button className="product-qty-btn" type="button" onClick={() => increaseQuantity(index)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="text-right">${(quantity * price).toFixed(0)}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th colSpan="3">&nbsp;</th>
                                            <th>Artículos en carrito<span className="ml-2 mr-2">:</span><span className="text-danger">{getQuantity()}</span></th>
                                            <th className="text-right">Total Carrito<span className="ml-2 mr-2">:</span><span className="text-danger">$ {getCartTotal.toFixed(0)}</span></th>
                                        </tr>
                                    </tfoot>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Cart