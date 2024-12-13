const transientState = {
    "id": 0,
    "paintId": 0,
    "interiorId": 0,
    "techId": 0,
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
    transientState.techId = chosenTech
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

