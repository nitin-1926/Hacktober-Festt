import React from 'react'
import { useSelector } from 'react-redux'


const CartTotal = ()=>{
    const totalPrice = useSelector(state=>state.CartReducer)  
    return(
        <div>
            {totalPrice.items.length>0?
            <div className='cartTotal'>
            <h2>Price Details</h2>  
            <div className='det'> 
            <span><strong>Net Total:</strong> Rs. {totalPrice.total_price}</span>
            <span><strong>Delivery Charges:</strong> Rs. 99</span>
            <span><strong>GST 18%:</strong> Rs.{(totalPrice.total_price * 0.18).toFixed(2)}</span>
            <span><strong>Total Amount:</strong> Rs. {(totalPrice.total_price+99+(totalPrice.total_price*0.18)).toFixed(2)}</span>
            </div>
            </div>:''
            }   
        </div>
    )
}



export default CartTotal