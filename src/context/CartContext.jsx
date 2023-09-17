import {createContext} from "react"
import {useState} from 'react'

export const CartContext = createContext({})
export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    const addCart = (item, count) => {
    const addC = {...item, count}
    const newCart = [...cart]
    const prodFind = cart.find((prod) => prod.id === addC.id)
    if (prodFind){
        prodFind.count += count
        setCart(newCart)
    }
    else {
        setCart([...cart, addC])
    }
    }
    const numberCart =() => {
        return cart.reduce((acum, registro) => acum + registro.count, 0)
    }
    const totalPrice =() => {
        return cart.reduce((acum, registro) => acum + registro.count * registro.precio, 0)
    }
    const deleteCart = () =>{
        setCart([])
    }
    return (
        <CartContext.Provider value={{cart, addCart, numberCart, totalPrice, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}
