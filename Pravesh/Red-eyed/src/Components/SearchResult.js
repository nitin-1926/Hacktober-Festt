import React from 'react';
import { useSelector } from 'react-redux';
import Full from './Full';


const SearchRasult = ()=>{
    const keyword = useSelector(state=>state.SearchReducer)
    const results = useSelector(state=> state.collectionReducer).filter(products=>products.title.toLowerCase().includes(keyword.toLowerCase()))
    return(
        <div>
            {keyword === ''?
            <h1 className='noRes'>Please Enter Somthing in The Search Bar</h1>:
            results.length === 0?
            <h1 className='noRes'>No Result Found With '{keyword}' name</h1>:
            <Full type= 'Reaults' collection={results}/>
            }
        </div>
    )
}


export default SearchRasult

