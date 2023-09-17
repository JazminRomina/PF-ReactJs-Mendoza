import styles from './CartItem.module.css'

export const CartItem = ({item}) => {
    return (
        <div >
            {
            <div className={styles.boxContent}>
                <p>{item.nombre}</p>
                <p>{item.count}</p>
                <p>${item.precio}</p>
                <p>${item.precio * item.count}</p>
            </div>
            }
        </div>
    )
}
