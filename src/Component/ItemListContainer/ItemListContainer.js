import { useState } from 'react'
import styles from './ItemListContainer.module.css'
import ItemCount from '../../Component/ItemCount/ItemCount';

const ItemListContainer = ({saludo}) => {
    const itemStock = 5;
    const onAdd = (quantity) => {
        if(itemStock > 0){
            console.log("El item se puede comprar, hay: " +itemStock + " en stock.")
        }else{
            console.log("No podemos vender lo que no tenemos.")
        }
        
      }

    return (
        <div className="container-fluid">
            <div className={styles.products}>
                <h1 className={styles["greeting"]}>{saludo}</h1>
            </div>
            <div>
            <ItemCount initial={1} stock={itemStock} onAdd={onAdd}/>
            </div>
        </div>
        
    );
}

export default ItemListContainer;
 