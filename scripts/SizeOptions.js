import { setSize } from "./transientState.js"

export const sizeOptions = async () => {
    document.addEventListener("change", handleSizeChange)
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    let html = ""
    for (const size of sizes) {
        html += `<section class="sizes">
        <input type="radio" name="size" value="${size.id}" data-price="${size.price}"/>${size.carets}
        </section>`
    }
    return html
}


const handleSizeChange = (changeEvent) => {
    
    if(changeEvent.target.name === "size") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSize(convertedToInt)
        
    }

}