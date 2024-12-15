import { setMetal } from "./transientState.js"


export const MetalOptions = async () => {
    document.addEventListener("change", handleMetalChange)
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    let html = ""
    for (const metal of metals) {
        html += `<section class="metals">
        <input type="radio" name="metaloption" value="${metal.id}" data-price="${metal.price}"/>${metal.metal}
        </section>`
    }
    return html
}

const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metaloption") {
        const newChangeId = parseInt(changeEvent.target.value)
        
        setMetal(newChangeId)
        
    }
}