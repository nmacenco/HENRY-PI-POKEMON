import React from 'react' ;
import {Link} from 'react-router-dom'

export default function Card ({id, img,name,types}) {


    return (
        <div>
            <img src={img} alt="" width={'250px'}/>
            <Link to={`/detail/${id}`} ><h2>{name}</h2></Link>
            
            <h4>{ types.map( type => type.name)  }</h4>
        </div>
    )
}