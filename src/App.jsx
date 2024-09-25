import { useState } from 'react'
import { productes } from './data/db.js'
import './App.css'
import Cart from './components/Cart.jsx'
import FruitContainer from './components/FruitContainer.jsx'

function App() {
  const [fruits, setFruits] = useState(productes)
  const [cart, setCart] = useState([])

  function addToCart(fruit) {
    const foundIndex = cart.findIndex((item) => item.id === fruit.id)

    if (foundIndex >= 0) {
      const cartUpdated = [...cart]
      cartUpdated[foundIndex].cantidad++
      setCart(cartUpdated)
    } else {
      fruit.cantidad = 1
      setCart([...cart, fruit])
    }
  }

  function removeFromCart(fruitId) {
    const updatedCart = cart.filter((item) => item.id !== fruitId)

    setCart(updatedCart)
  }

  return (
    <>
      <div className="container">
        <h1>Fruiteria</h1>
        <div className="container-flex">
          <FruitContainer fruits={fruits} addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </>
  )
}

export default App
