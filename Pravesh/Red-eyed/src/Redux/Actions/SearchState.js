const SearchState = (keyword) =>{
    return{
        type: 'SEARCH',
        payload: keyword
    }
}

export default SearchState