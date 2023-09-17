import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail.jsx"
import {database} from "../../firebase/client.js"
import {getDoc,doc} from "firebase/firestore"

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const params = useParams()

  useEffect(() => {
    const prodDB = doc(database,"products", params.id)
    getDoc(prodDB)
      .then((prod) =>{
        setDetail(
          {...prod.data(), id: prod.id}
        )
      })
  }, [params.id])

  return (
    <ItemDetail itemId={detail}/>
  )
}
