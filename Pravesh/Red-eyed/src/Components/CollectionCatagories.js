import React from 'react';
import { useSelector } from 'react-redux';
import Full from './Full';


const CollectionCatagories = (props)=>{
    const mens_collection = useSelector(state=>state.collectionReducer).filter(product=>product.for === 'male' || product.for === 'unisex')
    const womens_collection = useSelector(state=>state.collectionReducer).filter(product=>product.for === 'female' || product.for === 'unisex')
    const prism = useSelector(state=>state.collectionReducer).filter(product=> product.prism === true)
    const All = useSelector(state=>state.collectionReducer)
    const Classics = useSelector(state=>state.collectionReducer).filter(product=> product.classics === true)    
    const Metal = useSelector(state=>state.collectionReducer).filter(product=> product.body === 'metal')    
    return(
        <div className='CollectionCatagories'>
            <div className={props.type}>
                <h3>{props.type}</h3>
            </div>
            <div className='show'>
                {props.type === 'Men'?
                <Full type='men' collection={mens_collection} main={true}/>:
                props.type === 'Women'?
                <Full type='Women' collection={womens_collection} main={true}/>:
                props.type === 'Prism'?
                <Full type='Prism' collection={prism} main={true}/>:
                props.type === 'All'?
                <Full type='All' collection={All} main={true}/>:
                props.type === 'Classics'?
                <Full type='Classics' collection={Classics} main={true}/>:
                props.type === 'Metal'?
                <Full type='Metal' collection={Metal} main={true}/>:
                ''
                }  
            </div>
        </div>
    )
}


export default CollectionCatagories