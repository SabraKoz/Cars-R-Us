const transientState = {
    "id": 0,
    "paintId": 0,
    "interiorId": 0,
    "techpackageId": 0,
    "wheelId": 0
}

export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechChoice = (chosenTech) => {
    transientState.techpackageId = chosenTech
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const PlaceOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}