import { useShoppingCart } from "../Context/ShoppingCartContext"
import storeItems from '../data/Items.json'
import {Stack, Button} from 'react-bootstrap'
import { formatCurrency } from "../Utilities/FormatCurrency"
type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
const {removeFromCart} = useShoppingCart()
const item = storeItems.find(item => (item.id === id))
if(item == null) return null
return(
    <Stack direction="horizontal" gap={2}>
        <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit:"cover"}}/>
        <div className="me-auto">
            <div>
                {item.name} {quantity > 1  && <span className="text-muted text-sm">{quantity}x</span>}
            </div>
            <div className="text-muted text-sm"> {formatCurrency(item.price)}

            </div>
            <div className="ml-full"> {formatCurrency(item.price * quantity)}
            <Button variant="outline-danger text-sm ml-16" onClick={() => removeFromCart(item.id)}>X</Button>
            </div>
        </div>
    </Stack>
)
}