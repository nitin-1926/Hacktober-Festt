const RemoveFromCart = (payload) =>{
    return{
        type: 'REMOVE_ITEM',
        payload: payload
    }
}


export default RemoveFromCart