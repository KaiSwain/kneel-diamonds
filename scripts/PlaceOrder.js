import { saveOrder } from "./transientState.js"

export const placeOrderButton = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    let buttonHTML = "<button id='placeorder'>Place Order</button>"
    return buttonHTML
}

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "placeorder") {
        saveOrder()
    }
}