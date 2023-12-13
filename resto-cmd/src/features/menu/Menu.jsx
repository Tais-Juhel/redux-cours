import { useDispatch } from 'react-redux'
import * as ProductList from '../../common/models'
import { addProduct } from '../../app/store'
import ProductCard from '../productCard/ProductCard'

function Menu() {
  const dispatch = useDispatch()
  return (
    <div className="Menu">
      {Object.values(ProductList).map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onSelect={() => dispatch(addProduct(product))}
        />
      ))}
    </div>
  )
}

export default Menu
