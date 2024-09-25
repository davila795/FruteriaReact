export default function Cart({ cart, removeFromCart }) {
  function calculateTotal() {
    const total = cart.reduce((acc, item) => acc + item.preu * item.cantidad, 0)
    return total.toFixed(2)
  }

  return (
    <div className="cart">
      {cart.map(({ id, nom, preu, cantidad }) => {
        return (
          <div key={id} className="card bg-darkgreen">
            <div>
              <p>{nom}</p>
              <p>
                {cantidad}u x {preu}€/u = {(cantidad * preu).toFixed(2)}€
              </p>
            </div>
            <a onClick={() => removeFromCart(id)} className="btn bg-red" href="#">
              Treure
            </a>
          </div>
        )
      })}
      <div className="total-price">
        <p>TOTAL: {calculateTotal()}€</p>
      </div>
    </div>
  )
}
