import { MetalOptions } from './MetalOptions.js'
import { orderList } from './OrderList.js'
import { placeOrderButton } from './PlaceOrder.js'
import { sizeOptions } from './SizeOptions.js'
import { styleOptions } from './StyleOptions.js'



const render = async () => {
    const container = document.querySelector(".container")
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await sizeOptions()
    const styleOptionsHTML = await styleOptions()
    const buttonHTML = placeOrderButton()
    const orderHTML = await orderList()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
        ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        ${orderHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", render)

render()