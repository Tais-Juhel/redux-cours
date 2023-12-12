import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import { SuperCremeux } from '../../common/models'

function Cart() {
  const store = useStore()
  const [list, setList] = useState(store.getState().list)
  const totalOrder = list.reduce((prv, crt) => crt.price + prv, 0)

  useEffect(() => {
    store.subscribe(() => setList(store.getState().list))
  })

  return (
    <div className="Selection">
      <h1>Vos produits sélectionnés</h1>
      {list.map((item, index) => (
        <span key={index} className="SelectedProduct">
          {item.title} {item.price}
        </span>
      ))}
      {list.length === 0 ? (
        <p>Total commande {totalOrder} euros</p>
      ) : (
        <p>Aucun produit sélectionné pour le moment</p>
      )}
      <div className="CartNavBar">
        <button
          onClick={() =>
            store.dispatch({ type: 'ADD_PRODUCT', payload: SuperCremeux })
          }
        >
          Ajouter un super crémeux
        </button>
      </div>
    </div>
  )
}

export default Cart
