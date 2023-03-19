import { formatCurrency } from "../Utilities/FormatCurrency"
import { useShoppingCart } from "../Context/ShoppingCartContext"
interface StoreItemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string

}


export function StoreItem({id, name, price, imgUrl}: StoreItemProps){
const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
const quantity = getItemQuantity(id);
return(
    <div className="">
    <img src={imgUrl} 
    className="h-64 w-full object-cover">
    </img>
    <div className="flex justify-between">
    <h1 className="text-2xl font-bold ">{name}</h1>
    <p className=" text-gray-500">{formatCurrency(price)}</p>
    </div>
    <div className="mt-auto">
        {quantity === 0 ? (
            <button className="w-full bg-blue-800 text-white p-2 rounded-full mb-8 mt-4" onClick={() => increaseCartQuantity(id)
            }>+ Add To Cart

                </button>
        ): <div className="flex items-center flex-col">
            <div className="flex items-center justify-center">
            <button className="bg-blue-800 text-white p-3 rounded p" onClick={() => decreaseCartQuantity(id)
            }>-</button>
                <div className="text-lg px-2"> <span className="font-bold">{quantity}</span> in cart</div>
                <button className="bg-blue-800 text-white p-3 rounded" onClick={() => increaseCartQuantity(id)
            }>+</button>

                 </div>
                 <button className="bg-red-500 text-white p-3 w-full rounded mt-2" onClick={() => removeFromCart(id)
            }>Remove</button>
        </div>}
    </div>
    </div>
)
}