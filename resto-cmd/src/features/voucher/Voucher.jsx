import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'

function Voucher() {
  const store = useStore()
  const [list, setList] = useState(store.getState().list)

  const available = list.find((product) => product.title === 'Super Crémeux')

  useEffect(() => {
    store.subscribe(() => setList(store.getState().list))
  })

  return (
    <div className="Voucher">
      {available && (
        <button
          onClick={() =>
            store.dispatch({
              type: 'APPLY_VOUCHER',
              payload: { price: 2 },
            })
          }
        >
          Appliquer ma promo Super Crémeux
        </button>
      )}
    </div>
  )
}

export default Voucher