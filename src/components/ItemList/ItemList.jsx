import {Link} from "react-router-dom"
import styles from "./ItemList.module.css"

export const ItemList = ({data}) => {
  return (
    <div className={styles.prodDiv}>
            <div>
              <img className={styles.imgProd} src={data.imagen} alt={data.nombre} />
            </div>
            <div className={styles.detailProd}>
              <p className={styles.titleProd}>{data.nombre}</p>
              <p className={styles.desProd}>{data.descripcion}</p>
              <Link to={`/item/${data.id}`}>
                <button className={styles.botonProd}>View More</button>
              </Link>
            </div>
          </div>
  )
}
