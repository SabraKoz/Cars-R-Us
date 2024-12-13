import { setWheelChoice } from "./TransientState.js"

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChange)
    
    let wheelsChoiceHTML = ""

    wheelsChoiceHTML += '<select id="wheel">'
    wheelsChoiceHTML += '<option value="0">Select a wheel type</option>'

    const wheelsArray = wheels.map( 
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    wheelsChoiceHTML += wheelsArray.join("")
    wheelsChoiceHTML += "</select>"
    return wheelsChoiceHTML
}

const handleWheelChange = (event) => {
    if (event.target.id === "wheel") {
        setWheelChoice(parseInt(event.target.value))
    }
}