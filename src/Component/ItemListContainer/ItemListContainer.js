import { useState } from 'react'
import styles from './ItemListContainer.module.css'
import ItemCount from '../../Component/ItemCount/ItemCount';

const ItemListContainer = ({saludo}) => {
    const onAdd = (quantity) => {
        console.log(quantity)
      }

    return (
        <div className="container-fluid">
            <div className={styles.products}>
                <h1 className={styles["greeting"]}>{saludo}</h1>
            </div>
            <div>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>
        
    );
}

export default ItemListContainer;
 