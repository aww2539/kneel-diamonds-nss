import { getJewelryTypes, getMetals, getOrders, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {

    const metals = getMetals()

        // Remember that the function you pass to find() must return true/false
        const foundMetal = metals.find(
            (metal) => {
                return metal.id === order.metalId
            }
        )

    const sizes = getSizes()

        // Remember that the function you pass to find() must return true/false
        const foundSize = sizes.find(
            (size) => {
                return size.id === order.sizeId
            }
        )

    const styles = getStyles()

        // Remember that the function you pass to find() must return true/false
        const foundStyle = styles.find(
            (style) => {
                return style.id === order.styleId
            }
        )

    const jewelryTypes = getJewelryTypes()

        const foundJewelryType = jewelryTypes.find(
            (jewelryType) => {
                return jewelryType.id === order.jewelryTypeId
            }
        )


        const subtotalCost = foundMetal.price + foundSize.price + foundStyle.price

        const totalCost = subtotalCost * foundJewelryType.multiplier

        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        
        return `<li>
            Order #${order.id} cost ${costString}
        </li>`        
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

