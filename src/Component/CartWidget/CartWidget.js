import styles from './CartWidget.module.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
function CartWidget() {
    const {getQuantity} = useContext(CartContext);
    return (
    		          
            <div className={styles.carritoIconDiv}>
	    <Link to={'/cart'} className="CartWidget"> 
           {getQuantity()} <i className="fa fa-shopping-cart"></i>
    	    </Link>
            </div>



    );
}

export default CartWidget;