import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'

function Owner() {
  const store = useStore()
  const [owner, setOwner] = useState(store.getState().owner)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const firstName = evt.currentTarget.firstName.value
    store.dispatch({
      type: 'UPDATE_FIRSTNAME',
      payload: firstName,
    })
  }

  useEffect(() => {
    store.subscribe(() => setOwner(store.getState().owner))
  })

  return (
    <form onSubmit={handleSubmit} className="OwnerForm">
      <h2>Propriétaire du restaurant</h2>
      {owner?.firstName ? (
        <p>Le propriétaire du restaurant est {owner.firstName}</p>
      ) : (
        <p>Le propriétaire n'a pas été configuré</p>
      )}
      <label>
        Prénom du propriétaire
        <input type="text" name="firstName" />
      </label>
      <button type="submit">Configurer le propriétaire</button>
    </form>
  )
}

export default Owner
