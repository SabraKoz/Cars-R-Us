import { InteriorOptions } from "./Interiors.js"
import { PaintOptions } from "./Paints.js"
import { TechnologiesOptions } from "./Tech.js"
import { WheelOptions } from "./Wheels.js"


const render = async () => {
    const paintOptionsHTML = await PaintOptions()
    const techOptionsHTML = await TechnologiesOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const wheelOptionsHTML = await WheelOptions()

    const composeHTML = `
        <h1>Cars-R-Us: Personal Car Builder</h1>
        
        <article class="choices">
            <section class="choices-paints options">
                <h2>Paint Colors</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices-interiors options">
                <h2>Interiors</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices-technologies options">
                <h2>Technology</h2>
                ${techOptionsHTML}
            </section>

            <section class="choices-wheels options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>
        </article>
        
        <article class="order">
        
        </article>
        
        <article class="customOrders">
            <h2>Custom Car Orders</h2>

        </article>
    `

    container.innerHTML = composeHTML
}

render()