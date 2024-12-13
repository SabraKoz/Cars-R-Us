import { setPaintChoice } from "./TransientState.js"

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChange)
    
    let paintsChoiceHTML = ""

    paintsChoiceHTML += '<select id="paint">'
    paintsChoiceHTML += '<option value="0">Select a color</option>'

    const paintsArray = paints.map( 
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    paintsChoiceHTML += paintsArray.join("")
    paintsChoiceHTML += "</select>"
    return paintsChoiceHTML
}

const handlePaintChange = (event) => {
    if (event.target.id === "paint") {
        setPaintChoice(parseInt(event.target.value))
    }
}

