import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'

function Total() {
  const store = useStore()
  const [list, setList] = useState(store.getState().list)
  const totalOrder = list.reduce((prv, crt) => crt.price + prv, 0)

  useEffect(() => {
    store.subscribe(() => setList(store.getState().list))
  })

  return (
    <div className="TotalCommand">
      {list.length ? (
        <p>Total de {totalOrder} euros</p>
      ) : (
        <p>Aucun produit n'est sélectionné</p>
      )}
    </div>
  )
}

export default Total
