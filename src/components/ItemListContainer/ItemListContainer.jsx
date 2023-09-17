import {useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {ItemList} from "../ItemList/ItemList.jsx"
import styles from "./ItemListContainer.module.css"
import {database} from "../../firebase/client.js"
import {collection, getDocs, query, where} from "firebase/firestore"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const params = useParams()

  useEffect(() => {
    const productosDB = collection(database, "products")
    const productosFiltro = params.id ? query(productosDB, where("categoria", "==", params.id)) : productosDB
    getDocs(productosFiltro)
      .then((prods) => {
        setProducts(
          prods.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )
      })
  }, [params.id])

  return (
    <div className={styles.gridProd}>
      {
        products.map(item => (
          <div key={item.id}>
            <ItemList data={item}/>
          </div>
        ))
      }
    </div>
  )
}
