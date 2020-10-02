import React from 'react';
import { Link } from 'react-router-dom';


const Influencers = () =>{
    return(
        <div className='Influencers'>
            <div className='show'>
                <img src='https://cdn.shopify.com/s/files/1/2554/5114/files/alex-image-one_700x700.jpg?v=1579861476' alt='alex'/>
                <span>
                    <h4>style</h4>
                    <h2>scholars</h2>
                    <p>
                    They're classic, stylish and yet modern. Now, fitted with the all new Glass Polarized lenses with Anti Reflective Coating.
                    </p>
                    <Link to='/collectionsDetails/All'><button>Shop Now</button></Link>
                </span>
            </div>
            <div className='show'>
            <img src='https://cdn.shopify.com/s/files/1/2554/5114/files/specters_700x700.jpg?v=1563503157' alt='alex'/>
                <span>
                    <h4>UNCOMPROMISING QUALITY</h4>
                    <h2>Specters</h2>
                    <p>
                    Each pair of Jade Black is made with obsessive attention detail, with the goal impress. We settle for nothing less and refuse to compromise at the customer's expense.  
                    </p>
                    <Link to='/collectionsDetails/Prism'><button>Shop Now</button></Link>
                </span>
            </div>
        </div>
    )
}

export default Influencers