let state = {
    list: []
}

const subscribers = []

const subscribe = (fct) => {
    return subscribers.push(fct)
}

const dispatch = (newStateValue) => {
    state = newStateValue
    for (const fct of subscribers) {
        fct(state)
    }
}

document.getElementById("addForm").addEventListener("submit", (evt) => {
    evt.preventDefault()
    const firstNameInput = evt.currentTarget.firstName;
    dispatch({
        owner: {
            firstName: firstNameInput.value
        }
    })
})

subscribe((state) => {
    if (state.owner) {
        document.getElementById("header").textContent = `Le propriétaire du retaurant est ${state.owner.firstName}`
    }
    if (state.list) {
        document.getElementById("command").innerHTML = `<h2>Vous avez selectionné les produit suivants:</h2>`

        for (let item of state.list) {
            const itemElement = document.createElement("div")
            itemElement.innerHTML = `
                <div>
                ${item.title} <span>${item.price}</span>
                </div>`
            document.getElementById("command").appendChild(itemElement)
        }
    }
})

const DoubleCantal = {
    title: 'Double Cantal',
    price: 15.99,
}

const SuperCremeux = {
    title: 'Super Crémeux',
    price: 14.99,
}
const PouletCroquant = {
    title: 'Poulet Croquant',
    price: 17.99,
}

const PRODUCT_LIST = {
    PouletCroquant,
    SuperCremeux,
    DoubleCantal
}

document.querySelectorAll('.orderButton').forEach((element) => {
    element.addEventListener('click', (event) => {
        const productId = event.target.dataset['id']
        const productList = state.list
        productList.push(PRODUCT_LIST[productId])
        dispatch({
            list: productList
        })
    })
})

