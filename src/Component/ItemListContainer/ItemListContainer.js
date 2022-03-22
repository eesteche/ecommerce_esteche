import styles from './ItemListContainer.module.css'
import ItemList from '../../Component/ItemList/ItemList';

const ItemListContainer = ({saludo}) => {

    return (
        <div className="container-fluid">
            <div className={styles.products}>
                <h1 className={styles["greeting"]}>{saludo}</h1>
            </div>
            <div>
            <ItemList />
            </div>
        </div>
        
    );
}

export default ItemListContainer;
 