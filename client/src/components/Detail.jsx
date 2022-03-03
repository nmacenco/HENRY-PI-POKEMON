import React, {useEffect} from 'react';
import {getPokeById} from '../actions'
import {useDispatch, useSelector} from 'react-redux';
import {useParams,Link} from 'react-router-dom'
export default function Detail () {
    const dispatch = useDispatch();
    const poke = useSelector(state => state.poke)
    const {id} = useParams()
    useEffect(()=> {
        dispatch(getPokeById(Number(id)))
        
    }, [dispatch,id])

    
    return (

        <div>
            {
                (Object.keys(poke).length > 0) ?
                <div>
                <button><Link to={'/home'}> Home</Link></button>
                <img src={poke.img} alt="" width={'400px'} />
                <h1> {poke.name} </h1>
                <p> Vida : {poke.hp} </p>
                <p> Ataque : {poke.attack} </p>
                <p> Defensa : {poke.defense} </p>
                <p> Velocidad : {poke.speed} </p>
                <p> Peso : {poke.weight} </p>
                <p> Altura : {poke.height} </p>
                {poke.types.map((type,index) => {
                    return (<p key={index}>{type.name}</p>)
                })}
                </div>
                :
                <h1>Cargando ...</h1>

            }
        </div>
    )
}