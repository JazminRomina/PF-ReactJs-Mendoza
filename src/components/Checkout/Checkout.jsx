import {collection, addDoc} from "firebase/firestore"
import {CartContext} from "../../context/CartContext.jsx"
import {useContext, useState} from "react"
import {database} from "../../firebase/client.js"
import {useForm} from "react-hook-form"
import styles from "./Checkout.module.css"
import { Link } from "react-router-dom"

export const Checkout = () => {
    const {cart, totalPrice, deleteCart} = useContext(CartContext)
    const [docOrder, setDocOrder] = useState("")
    const {register, handleSubmit} = useForm()

    const purchase = (data) =>{
        const order = {
            nombre: data,
            productos: cart,
            total: totalPrice()
        }
        const orderCollection = collection(database, 'orders')
        addDoc(orderCollection, order).then(({id}) => {
            setDocOrder(id)
            deleteCart()
        })
    }
    if(docOrder){
        return(
            <div className={styles.purchaseBox}>
                <h1 className={styles.purchaseTitle}>Congratulations! Your purchase has been successfully added to our database.</h1>
                <p className={styles.idPurchase}>Your ID of your purchase is: {docOrder}</p>
                <p className={styles.dontForget}>(Remember to write your ID in a paper so you don't forget it!)</p>
                <Link to='/'>
                    <button className={styles.btnReturn}>Return</button>
                </Link>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Final Step</h1>
            <form className={styles.formBox} onSubmit={handleSubmit(purchase)}>
                <input className={styles.inputBox} type="text" placeholder="Name" {...register("nombre")} />
                <input className={styles.inputBox} type="phone" placeholder="Phone" {...register("telefono")}/>
                <input className={styles.inputBox} type="email" placeholder="Email" {...register("email")}/>
                <button className={styles.btnBox} type="submit">Purchase</button>
            </form>
        </div>
    )
}
