import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css'
import { NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="container">
            <header className={styles.header}>

                <a href="http://localhost:3000/" className={styles.headerLogo}>Edgar's MarketPlace</a>

                <nav className={styles.Categories}>
                    <NavLink to="/category/tecnologia" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Tecnologia</NavLink>
                    <NavLink to="/category/muebles" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Muebles</NavLink>
                    <NavLink to="/category/electro" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Electrodomesticos</NavLink>
                    <NavLink to='/category/musica' className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}> Música</NavLink>
                    
                </nav>
                <CartWidget />
                

            </header>
        </div>
    );
}

export default NavBar;
