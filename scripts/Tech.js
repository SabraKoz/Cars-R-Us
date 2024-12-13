import { setTechChoice } from "./TransientState.js"

export const TechnologiesOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    document.addEventListener("change", handleTechChange)

    let techChoicesHTML = ""

    techChoicesHTML += '<select id="tech">'
    techChoicesHTML += '<option value="0">Select a technology package</option>'

    const techArray = technologies.map( 
        (tech) => {
            return `<option value="${tech.id}">${tech.tech}</option>`
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