import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav =()=>{
    const number_cart = useSelector(state=>state.CartReducer)

    const navHandler = ()=>{
        const nav = document.getElementById('NavShow')
        nav.classList.toggle('NavSlide')

    }
    const HideNav = ()=>{
        const nav = document.getElementById('NavShow')
        nav.classList.toggle('NavSlide')
    }

    const searchSlide =()=>{
        const classes = document.getElementById('search').className
        if(classes.includes('slide')){
            document.getElementById('search').classList = 'search'
        }
        else{
            document.getElementById('search').classList = 'slide'
        }
    }
    return(
        <div className='nav'>
            <span><Link to='/' className='link'>Red eyed</Link></span>
            <div className='Nav'>
                <ul id='NavShow'>
                    <li><Link to='/' className='link' onClick={HideNav}>Home</Link></li>
                    <li><Link to='/collectionsDetails/Mens' className='link' onClick={HideNav}>Mens</Link></li>
                    <li><Link to='/collectionsDetails/Womens' className='link' onClick={HideNav}>Womens</Link></li>
                    <li><Link to='/collectionsDetails/prism' className='link' onClick={HideNav}>Prism</Link></li>
                    <li><Link to='/collectionsDetails/Classics' className='link' onClick={HideNav}>Classics</Link></li>
                </ul>
            </div>
            <div className='nav_sec'>
                <ul>
                    {/* <li>
                        <select>
                            <option>inr</option>
                            <option>usd</option>
                            <option>cad</option>
                            <option>aud</option>
                        </select>
                    </li> */}
                    <Link to='/login' className='link'><li className='acc'></li></Link>
                    <li className='search' onClick={searchSlide}></li>
                <Link to='/cart' className='link'><li className='cart'>{number_cart.total_items}</li></Link>
                    <li className='hamburger' onClick={navHandler}>
                        <ul>
                            <li className='line1'></li>
                            <li className='line2'></li>
                            <li className='line3'></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default Nav