const initialState = {
        items: [],
        total_price: 0,
        total_items: 0
    }
    let total_items = 0
    let stack = 0
const CartReducer = (state= initialState, actions)=>{
    const already = state.items.filter(item=> item.id === actions.payload.id)
    switch(actions.type){
        case 'ADD_ITEM':
            if(already.length > 0){
                const withoutAddedProduct = state.items.filter(prod=> prod.id !== already[0].id)
                actions.payload.count++
                total_items++
                return {
                    items: [
                        ...withoutAddedProduct,
                        actions.payload
                    ],
                    total_price: state.total_price + parseInt(actions.payload.price),
                    total_items: total_items
                }
            }
            else
            {
                actions.payload.count = 1
                stack++
                actions.payload.stack = stack
                total_items++
            return {
                items: [
                    ...state.items,
                    actions.payload
                ],
                total_price: state.total_price + parseInt(actions.payload.price),
                total_items: total_items,
            }
        }
        case 'REMOVE_ITEM':
            if(actions.payload.count === 1){
                total_items--
                const removeSelectedItem = state.items.filter(prod=> prod.id !== actions.payload.id)
                return{
                    items: removeSelectedItem,
                    total_price: state.total_price-actions.payload.price,
                    total_items: total_items
                }
            }
            else if(already.length > 0){
                const removeSelectedItem = state.items.filter(prod=> prod.id !== already[0].id)
                actions.payload.count--
                total_items--
                return {
                    items: [
                        ...removeSelectedItem,
                        actions.payload
                    ],
                    total_price: state.total_price - parseInt(actions.payload.price),
                    total_items: total_items
                }
            }
            else
                {
                    total_items--
                    const removeSelectedItem = state.items.filter(prod=>prod.id!==actions.payload.id)
                    return {
                        items: removeSelectedItem,
                        total_price: state.total_price - parseInt(actions.payload.price),
                        total_items: total_items
                    }
                }
        default:
            return state
    }
}


export default CartReducer