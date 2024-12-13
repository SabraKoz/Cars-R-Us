import { setInteriorChoice } from "./TransientState.js"

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChange)
    
    let interiorsChoiceHTML = ""

    interiorsChoiceHTML += '<select id="interior">'
    interiorsChoiceHTML += '<option value="0">Select an interior</option>'

    const interiorsArray = interiors.map( 
        (interior) => {
            return `<option value="${interior.id}">${interior.type}</option>`
        }
    )

    interiorsChoiceHTML += interiorsArray.join("")
    interiorsChoiceHTML += "</select>"
    return interiorsChoiceHTML
}

const handleInteriorChange = (event) => {
    if (event.target.id === "interior") {
        setInteriorChoice(parseInt(event.target.value))
    }
}