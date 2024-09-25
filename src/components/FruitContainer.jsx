export default function FruitContainer({ fruits, addToCart }) {
  return (
    <div className="fruit-container">
      {fruits.map((fruit) => {
        return (
          <div key={fruit.id} className="card bg-lightgreen">
            <p>
              {fruit.nom}({fruit.preu} €/u)
            </p>
            <a onClick={() => addToCart(fruit)} href="#" className="btn bg-black">
              Afegir
            </a>
          </div>
        )
      })}
    </div>
  )
}
