import { useStore, useSelector } from 'react-redux'
import { isVoucherAvailable } from '../../app/selectors'

function Voucher() {
  const store = useStore()
  const available = useSelector(isVoucherAvailable)

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
