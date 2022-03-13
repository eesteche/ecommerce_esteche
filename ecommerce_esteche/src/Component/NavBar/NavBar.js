import styles from './NavBar.module.css'
function NavBar() {
    return (

        <header className={styles.header}>
            
            <a href="#" className={styles.headerLogo}>Edgar's MarketPlace</a>

            <nav className={styles.menu}>
                <a href="#">Tecnologia</a>
                <a href="#">Muebles</a>
                <a href="#">Ropa</a>
                <a href="#">Juegos</a>
            </nav>

            <div className={styles.carritoIconDiv}>
            <a href="#" ><i className="fa fa-shopping-cart"></i></a>
            </div>

        </header>

    );
}

export default NavBar;
