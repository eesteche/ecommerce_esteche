import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css'
function NavBar() {
    return (
        <div className = "container">
        <header className={styles.header}>
           
            <a href="#" className={styles.headerLogo}>Edgar's MarketPlace</a>

            <nav className={styles.menu}>
                <a href="#">Tecnologia</a>
                <a href="#">Muebles</a>
                <a href="#">Ropa</a>
                <a href="#">Juegos</a>
            </nav>

            <CartWidget/>

        </header>
        </div>
    );
}

export default NavBar;
