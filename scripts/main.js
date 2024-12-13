

const render = async () => {

    const composeHTML = `
        <h1>Cars-R-Us</h1>
        
        <article class="choices">
            <section class="choices-paints options">
                <h2>Paint Colors</h2>

            </section>

            <section class="choices-interiors options">
                <h2>Interiors</h2>

            </section>

            <section class="choices-technologies options">
                <h2>Technology</h2>

            </section>

            <section class="choices-wheels options">
                <h2>Wheels</h2>

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