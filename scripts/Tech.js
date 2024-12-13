import { setTechChoice } from "./TransientState.js"

export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/techpackages")
    const techpackages = await response.json()

    document.addEventListener("change", handleTechChange)

    let techChoicesHTML = ""

    techChoicesHTML += '<select id="tech">'
    techChoicesHTML += '<option value="0">Select a technology package</option>'

    const techArray = techpackages.map( 
        (techpackage) => {
            return `<option value="${techpackage.id}">${techpackage.type}</option>`
        }
    )

    techChoicesHTML += techArray.join("")
    techChoicesHTML += "</select>"
    return techChoicesHTML
}

const handleTechChange = (event) => {
    if (event.target.id === "tech") {
        setTechChoice(parseInt(event.target.value))
    }
}