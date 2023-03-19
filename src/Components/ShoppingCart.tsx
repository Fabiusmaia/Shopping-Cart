import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/ShoppingCartContext"
import { formatCurrency } from "../Utilities/FormatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/Items.json"

export function ShoppingCart({isOpen}){
    type ShoppingCartProps = {
        isOpen: boolean
    }
    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                {cartItems.map(item => {
                    return(
                        <div>
                            <CartItem key={item.id} {...item} />
                        </div> 
                    )
                })}
                <div>Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(item => item.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                },0))}</div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>

    )
}