export const OrderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=techpackage&_expand=wheel")
    const orders = await response.json()

    let ordersHTML = ""
    const ordersArray = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.interior.price + order.techpackage.price + order.wheel.price
            return `<div id="${order.id}" class="order-details">${order.paint.color} car with ${order.wheel.type} wheels, ${order.interior.type} interior, and the ${order.techpackage.type} for a total cost of $${orderPrice}</div>`
        }
    )
    ordersHTML += ordersArray.join("")
    return ordersHTML
}