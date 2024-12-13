import { PlaceOrder } from "./TransientState.js"

const handlePlaceOrderClick = (event) => {
    if (event.target.id === "place-order") {
        PlaceOrder()
    }
}

export const PlaceOrderButton = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    return "<div><button id='place-order'>Place Car Order</button></div>"
}