import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCZTZDvRU8yvGqPNOobIbJsWwWDcD6wS2Y",
  authDomain: "ecommerce-bondsweets-41450.firebaseapp.com",
  projectId: "ecommerce-bondsweets-41450",
  storageBucket: "ecommerce-bondsweets-41450.appspot.com",
  messagingSenderId: "190448512696",
  appId: "1:190448512696:web:93c518069517c9a5dece4d"
}

const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)