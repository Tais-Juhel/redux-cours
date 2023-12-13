import { useStore } from 'react-redux'
import ProductCard from '../productCard/ProductCard'
import { DoubleCantal, PouletCroquant, SuperCremeux } from '../../common/models'

const productList = [DoubleCantal, SuperCremeux, PouletCroquant]

function Menu() {
  const store = useStore()

  return (
    <div>
      {productList.map((product) => (
        <ProductCard
          product={product}
          onSelect={() =>
            store.dispatch({
              type: 'ADD_PRODUCT',
              payload: product,
            })
          }
        />
      ))}
    </div>
  )
}

export default Menu
