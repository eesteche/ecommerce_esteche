import styles from './CartWidget.module.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
function CartWidget() {
    const {getQuantity} = useContext(CartContext);
    if(getQuantity() > 0){
        return (
    	      
            <div className={styles.carritoIconDiv}>
	    <Link to={'/cart'} className="CartWidget"> 
           {getQuantity()} <i className="fa fa-shopping-cart"></i>
    	    </Link>
            </div>



    );
    }else{
        return(
        <div className={styles.carritoIconDiv}>
        </div>
        )
    }
    
}

export default CartWidget;