import React from 'react';
import { Link } from 'react-router-dom';


const Catagories = ()=>{
    return(
        <div className='home'>
            <div className='cat'>
                <Link className='link' to='/collectionsDetails/Mens'><div className='men'><h2>men's</h2  ></div></Link>
                <Link className='link' to='/collectionsDetails/Womens'><div className='women'><h2>women's</h2></div></Link>
            </div>
            <div className='text'>
                <span>LUXURY WITHOUT THE <del>PRICE TAG</del>.</span>
                <p>
                We engineer premium eyewear with the best in class materials and leave behind the hefty price tag.
                </p>
            </div>
        </div>
    )
}

export default Catagories