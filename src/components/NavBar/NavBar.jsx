import {Link} from 'react-router-dom'
import {CartWidget} from "../CartWidget/CartWidget.jsx"
import image from "../../assets/logo.png"
import styles from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={styles.bgNav}>
      <div className={styles.navBar}>
        <Link className={styles.linkActive} to='/'>
          <img className={styles.logo} src={image} alt="Logo de BondSweets" />
        </Link>
        <Link className={styles.linkActive} to='category/desserts'>Desserts</Link>
        <Link className={styles.linkActive} to='category/tea'>Tea</Link>
        <Link className={styles.linkActive} to='category/sweets'>Sweets</Link>
        <Link className={styles.linkActive} to='category/promotions'>Promotions</Link>
        <CartWidget/>
      </div>
    </div>
  )
}
