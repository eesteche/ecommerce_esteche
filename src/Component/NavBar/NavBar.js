import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css'
function NavBar() {
    return (
        <div className = "container">
        <header className={styles.header}>
           
            <a href="http://localhost:3000/" className={styles.headerLogo}>Edgar's MarketPlace</a>

            <nav className={styles.menu}>
                <a href="http://localhost:3000/">Tecnologia</a>
                <a href="http://localhost:3000/">Muebles</a>
                <a href="http://localhost:3000/">Ropa</a>
                <a href="http://localhost:3000/">Juegos</a>
            </nav>

            <CartWidget/>

        </header>
        </div>
    );
}

export default NavBar;
