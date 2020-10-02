import React from 'react';


const ItemAdded = ()=>{
    const clickHandler = () =>{
        document.getElementById('AddItem_btn').disabled = false
        document.getElementById('ItemAdded').style.top = '-50%'
    }
    return(
        <div className='ItemAdded' id='ItemAdded'>
            <h1>Item Added To your Cart Sucessfully</h1>
            <button onClick={clickHandler}>Close</button>
        </div>
    )
}

export default ItemAdded