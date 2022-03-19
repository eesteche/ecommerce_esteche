import styles from './CartWidget.module.css'
function CartWidget() {
    return (

        <header className={styles.header}>
                        
            <div className={styles.carritoIconDiv}>
            <a href="#" ><i className="fa fa-shopping-cart"></i></a>
            </div>

        </header>

    );
}

export default CartWidget;