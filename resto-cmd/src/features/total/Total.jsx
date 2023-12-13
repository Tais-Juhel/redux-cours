import { useSelector } from 'react-redux'
import { getProductList, getTotalOrder } from '../../app/selectors'

function Total() {
  const list = useSelector(getProductList)
  const totalOrder = useSelector(getTotalOrder)

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
