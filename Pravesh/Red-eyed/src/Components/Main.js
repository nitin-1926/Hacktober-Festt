import React from 'react';
import Catagories from './Catagories';
import Short from './Short';
import Influencers from './Influencers';
import { useSelector } from 'react-redux';
import Add from './Add';
import { Link } from 'react-router-dom';


const Main = ()=>{
    const men_collection = useSelector(state=>state.collectionReducer).filter(col=> col.for === 'male').slice(0,5)
    const women_collection = useSelector(state=>state.collectionReducer).filter(col=> col.for === 'female').slice(0,5)
    const Classics = useSelector(state=>state.collectionReducer).filter(col=> col.classics === true).slice(0,5)
    const Metal = useSelector(state=>state.collectionReducer).filter(col=> col.body === 'metal').slice(0,5)
    const prism = useSelector(state=>state.collectionReducer).filter(col=> col.prism === true).slice(0,5)
    return(
        <div>
            <div className='Home'>
                <h1>handmade eyewear</h1>
                <span>ultra premium materials - $49 <Link to='/collectionsDetails/All'><button>SHOP now</button></Link></span>
            </div>
            <Catagories/>
            <Short type='Mens' collection={men_collection}/>
            <Short type='Womens' collection={women_collection}/>
            <Influencers/>
            <Short type='Classics' collection ={Classics}/>
            <Add/>
            <Short type='Metal' collection={Metal}/>
            <Short type='Prism' collection={prism}/>
        </div>
    )
}


export default Main