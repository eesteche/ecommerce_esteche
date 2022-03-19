import { useState } from 'react'
import styles from './ItemListContainer.module.css'
const ItemListContainer = ({saludo}) => {

    return (
        <div className="container-fluid">
            <div className={styles.products}>
                <h1 className={styles["greeting"]}>{saludo}</h1>
            </div>
        </div>
    );
}

export default ItemListContainer;
 