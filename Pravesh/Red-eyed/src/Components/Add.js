import React from 'react'
import { Link } from 'react-router-dom'

const Add = () =>{
    return(
        <div className='Influencers'>
            <div className='show'>
                <img src='https://cdn.shopify.com/s/files/1/2554/5114/files/duo-1_700x700.jpg?v=1575578387' alt='models'/>
                <span>
                    <h4>OBESSIVE ATTENTION TO DETAIL</h4>
                    <h2>Bellas</h2>
                    <p>
                    Our first true cat-eye design, speaks for it self. Stand out in a crowd with a neck-turning design and an eye-popping color combination. 
                    </p>
                    <Link to='/collectionsDetails/All'><button>Shop Now</button></Link>
                </span>
            </div>
        </div>
    )
}


export default Add