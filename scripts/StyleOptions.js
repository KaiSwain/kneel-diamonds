import { setStyle } from "./transientState.js"

export const styleOptions = async () => {
    document.addEventListener("change", handleStyleChange)
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()
    let html = ""
    for (const style of styles) {
        html += `<section class="styles">
        <input type="radio" name="style" value="${style.id}" data-price="${style.price}"/>${style.style}
        </section>`
    }
    return html
}
const handleStyleChange = (changeEvent) => {
    
    if(changeEvent.target.name === "style") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setStyle(convertedToInt)
        
    }

}
