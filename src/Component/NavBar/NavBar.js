import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    //Se rompio git, a ver si lo arreglo

    return (

        <header className={styles.header}>


            <nav className={styles.Categories}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Edgar's Marketplace</NavLink>
                <NavLink to="/category/tecnologia" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Tecnologia</NavLink>
                <NavLink to="/category/muebles" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Muebles</NavLink>
                <NavLink to="/category/electro" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Electrodomesticos</NavLink>
                <NavLink to='/category/musica' className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}> Música</NavLink>

            </nav>
            <CartWidget />


        </header>

    );
}

export default NavBar;
