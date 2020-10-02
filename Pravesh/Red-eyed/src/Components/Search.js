import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchState from '../Redux/Actions/SearchState';
import { Link } from 'react-router-dom';

const Search = () =>{
    const[search, setSearch] = useState('');
    const dispatch = useDispatch()
    const changeHandler=(e)=>{
        setSearch(e.target.value)
    }

    const ClickHandler = () =>{
        dispatch(SearchState(search));
        document.getElementById('search').classList = 'search'
    }


    return(
        <div className='search' id='search'>
                <input type='text' className='product' placeholder='Search' onChange={changeHandler} spellCheck={false} ></input>
                <Link to='/SearchResults'><input type='button' value='Search' className='button' onClick={ClickHandler}></input></Link>
        </div>
    )
}



export default Search