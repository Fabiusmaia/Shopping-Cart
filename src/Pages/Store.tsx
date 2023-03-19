import { StoreItem } from '../Components/StoreItem'
import storeItems from '../data/Items.json'

export function Store(){
    return (
        <div className='flex items-center justify-center'>
    <div className='grid pt-16 lg:grid-cols-2 gap-x-32 gap-y-4'>

        {storeItems.map(item => {
            return(
                <div>
                    <StoreItem {...item}/>
                </div>
            )
        })}
    </div>
    </div>)
}