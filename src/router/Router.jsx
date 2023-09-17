import {NavBar} from '../components/NavBar/NavBar.jsx'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ItemDetailContainer} from '../components/ItemDetailContainer/ItemDetailContainer.jsx'
import {CartProvider} from '../context/CartContext.jsx'
import {CartView} from '../components/CartView/CartView.jsx'
import { Checkout } from '../components/Checkout/Checkout.jsx'

export function Router () {
    return(
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
)
}