import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddToCart from '../Redux/Actions/AddToCart';
import ItemAdded from './ItemAdded';




const GlassesDetails = ({match}) =>{
    const item = useSelector(state=>state.collectionReducer).filter(product=>product.id === match.params.id)[0]
    const dispatch = useDispatch()
    const clickHandler = ()=>{
        dispatch(AddToCart(item))
        document.getElementById('ItemAdded').style.top = '3%'
        document.getElementById('AddItem_btn').disabled = true
    }
    return(
        <div className='detailed'>
            <img src={item.img_big} alt={`Product with id ${match.params.id}`}/>
            <h1>{item.title} - Rs.{item.price}</h1>
            <button disabled={item.soldOut === true? true : false} onClick={clickHandler} id='AddItem_btn'>add to cart</button><br/>
            {item.soldOut === true? <span>out of stock!!!</span>:''}
            <ItemAdded/>
        </div>
    )
}


export default GlassesDetails