import React, {useEffect} from 'react';
import {getPokeById,deletePokeById} from '../actions'
import {useDispatch, useSelector} from 'react-redux';
import {useParams,Link} from 'react-router-dom'
export default function Detail () {
    const dispatch = useDispatch();
    const poke = useSelector(state => state.poke)
    const {id} = useParams()
    useEffect(()=> {
        dispatch(getPokeById((id)))
        
    }, [dispatch,id])

    function handleOnClick (e) {
        e.preventDefault()
        dispatch(deletePokeById());
    }
    
    return (

        <div>
            {
                (Object.keys(poke).length > 0) ?
                <div>
                    <button onClick={(e)=> handleOnClick(e)}><Link to={'/home'}> Home</Link></button>
                    {
                        poke.id.length > 9 ?
                        <div>
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
                        <div>      
                            <img src={poke.sprites.other.home.front_default} alt="" width={'400px'} /> 
                            <h1> {poke.name} </h1>
                            <p> Vida : {poke.stats[0].base_stat} </p>
                            <p> Ataque : {poke.stats[1].base_stat} </p>
                            <p> Defensa : {poke.stats[2].base_stat} </p>
                            <p> Velocidad : {poke.stats[5].base_stat} </p>
                            <p> Peso : {poke.weight} </p>
                            <p> Altura : {poke.height} </p>
                            {poke.types.map((type,index) => {
                                return (<p key={index}>{type.name}</p>)
                            })}
                        </div>
                    }

                </div>
                :
                <h1>Cargando ...</h1>

            }
        </div>
    )
}