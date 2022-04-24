import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../Services/Firebase/firestore';
import { memo, useState } from 'react';
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../notification/notification'

function NavBar() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    const {setNotification} = useNotification();

    useAsync(
        setLoading, 
        () => getCategories(), 
        setCategories, 
        () => setNotification('error', 'Hubo un error al cargando categorias'), 
        []
    )

    return (

        <header className={styles.header}>
            <nav className={styles.Categories}>                
                <NavLink to="/" className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Edgar's Marketplace</NavLink>
                {categories.map(p => <NavLink key={p.id} to={`/category/${p.category}`} className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>{p.category.toUpperCase()}</NavLink>)}                              
            </nav>
            <CartWidget />
        </header>

    );
}

export default memo(NavBar);
