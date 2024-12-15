

export const orderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()
    let html = ""
    for (const order of orders) {
        
        const orderPrice = order.metal.price + order.style.price + order.size.price
        html += `<div>ORDER #${order.id} costs $${orderPrice}</div>`
    }
    return html
}