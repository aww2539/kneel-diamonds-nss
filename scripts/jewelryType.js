import { getJewelryTypes, setJewelryType } from "./database.js"

const jewelryTypes = getJewelryTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelryType") {
            setJewelryType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const jewelryType of jewelryTypes) {
        html += `<li>
            <input type="radio" name="jewelryType" value="${jewelryType.id}" /> ${jewelryType.name}
        </li>`
    }

    html += "</ul>"
    return html
}