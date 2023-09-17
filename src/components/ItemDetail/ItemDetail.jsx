import styles from "./ItemDetail.module.css"
import {ItemQuantitySelector} from "../ItemQuantitySelector/ItemQuantitySelector.jsx"
import {Link} from 'react-router-dom'

export const ItemDetail = ({itemId}) => {
  return (
    <div className={styles.divProd}>
      <div className={styles.divContainer}>
          <img className={styles.prodImg} src={itemId.imagen} alt={itemId.nombre} />
      </div>
      <div className={styles.divContainer}>
          <p className={styles.titleProd}>{itemId.nombre}</p>
          <p className={styles.descProd}>Price: ${itemId.precio}</p>
          <p className={styles.descProd}>Category: {itemId.categoria}</p>
          <p className={styles.descProd}>Description: {itemId.descripcion}</p>
          <ItemQuantitySelector item={itemId}/>
          <Link to='/'>
            <div className={styles.boxBtn}>
              <button className={styles.btnBack}>Return</button>
            </div>
          </Link>
      </div>
    </div>
  )
}
