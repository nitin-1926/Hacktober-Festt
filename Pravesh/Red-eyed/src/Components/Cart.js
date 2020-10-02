import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartTotal from './CartTotal';
import { Link } from 'react-router-dom';
import AddToCart from '../Redux/Actions/AddToCart';
import RemoveFromCart from '../Redux/Actions/RemoveFromCart';


const Cart = () =>{
    const cart_items = useSelector(state=>state.CartReducer).items
    cart_items.sort(function(a, b){
        return a.stack-b.stack
    })
    console.log(cart_items)
    const dispatch = useDispatch()
    return(
        <div className='cart_list'>
            <h2>your Cart</h2>
            {
                cart_items.length > 0?
                cart_items.map(item=>
                    <div key={item.id} className='cart_items'>
                        <Link to={`/Details/${item.id}`} className='link'>
                            <img src={item.img} alt='item'/>
                        </Link>
                        <div className='details'>
                            <span style={{textTransform: "uppercase"}}>{item.title}</span>
                            <span>Rs. {item.price}</span>
                            <span>Quantity: {item.count}<button onClick={()=>dispatch(AddToCart(item))}>+</button><button onClick={()=>dispatch(RemoveFromCart(item))}>-</button></span>
                        </div>
                    </div>):
                    <h1 className='emptyCart'>Your Cart is empty!!</h1>
            }
            <CartTotal/>
        </div>
    )
}


export default Cart