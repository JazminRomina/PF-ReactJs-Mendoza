import {useContext, useState} from "react"
import styles from './ItemQuantitySelector.module.css'
import {CartContext} from "../../context/CartContext"

export const ItemQuantitySelector = ({item}) => {
  const [count, setCount] = useState(1)
  const {addCart} = useContext(CartContext)

  const maxCart = () => {
    setCount(count+1)
  }
  const minCart = () => {
    count <= 1 ? setCount(1) : setCount(count-1)
  }

  return (
    <div>
        <div className={styles.boxBtn}>
            <button className={styles.btnMaxMin} onClick={minCart}>-</button>
            <p className={styles.number}>{count}</p>
            <button className={styles.btnMaxMin}  onClick={maxCart}>+</button>
            <button className={styles.btnAdd} onClick={() => {addCart(item,count)}}>Add</button>
        </div>
    </div>
  )
}
