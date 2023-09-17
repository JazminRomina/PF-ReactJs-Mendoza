import {useContext} from "react"
import image from "../../assets/carrito.png"
import styles from "./CartWidget.module.css"
import {Link} from 'react-router-dom'
import {CartContext} from "../../context/CartContext.jsx"

export const CartWidget = () => {
  const {numberCart} = useContext(CartContext)
  return (
    <div className={styles.carrito}>
      <div className={styles.carritoSeparar}>
        <Link to='/cart'>
          <img className={styles.imgCarrito} src={image} alt="carrito de compras" />
        </Link>
      </div>
      <div className={styles.carritoSeparar}>
        <p className={styles.numerito}>{numberCart()}</p>
      </div>
    </div>
  )
}