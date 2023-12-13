const IMAGES = {
  'Double Cantal': 'images/DoubleCantal.svg',
  'Super Crémeux': 'images/SuperCremeux.svg',
  'Poulet Croquant': 'images/PouletCroquant.svg',
}

function ProductCard({ product, onSelect }) {
  return (
    <div className="ProductCard" onClick={onSelect}>
      <img src={IMAGES[product.title]} alt={product.title} />
      {product.title}
    </div>
  )
}

export default ProductCard
