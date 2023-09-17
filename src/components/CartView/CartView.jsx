import styles from "./CartView.module.css"
import {CartItem} from "../CartItem/CartItem.jsx"
import {CartContext} from "../../context/CartContext.jsx"
import {useContext} from "react"
import { Link } from "react-router-dom"


export const CartView = () => {
    const {cart, totalPrice} = useContext(CartContext)
    return (
        <>
        { cart.length > 0 ?
        <>
        <div>
            <h1 className={styles.cartTitle}>Shopping Cart</h1>
        </div>
        <div className={styles.boxForm}>
            <p>Name</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total Price</p>
        </div>
        <div>
            {
            cart.map((prod) => (
                <div key={prod.id}>
                <CartItem item={prod}/>
                </div>
            ))
            }
            <div className={styles.totalBox}>
                <p className={styles.total}>Total Amount: ${totalPrice()}</p>
            <Link to='/checkout'>
                <button className={styles.confirmBtn}>Checkout</button>
            </Link>
            </div>
        </div>
        </> :
        <p className={styles.nothing}>There is nothing to see here, go get some products to your cart ☹...</p>}
        </>
    )
}
