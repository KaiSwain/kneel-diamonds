const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
}

export const setMetal = (metalOption) => {
    transientState.metalId = metalOption
    console.log(transientState)
}

export const setSize = (sizeOption) => {
    transientState.sizeId = sizeOption
    console.log(transientState)
}

export const setStyle = (styleOption) => {
    transientState.styleId = styleOption
    console.log(transientState)
}


export const saveOrder = async () => {
    const postOrder = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOrder)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}