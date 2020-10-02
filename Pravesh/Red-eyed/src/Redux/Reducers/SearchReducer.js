

const SearchReducer = (state = '', actions) =>{
    switch(actions.type){
        case 'SEARCH':
            return actions.payload
            
        default:
            return ''
    }
}


export default SearchReducer