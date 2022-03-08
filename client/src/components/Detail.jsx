import React, {useEffect} from 'react';
import {getPokeById,deletePokeById} from '../actions'
import {useDispatch, useSelector} from 'react-redux';
import {useParams,Link} from 'react-router-dom';
import s from './styles/Detail.module.css';
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

        <React.Fragment >
            {
                (Object.keys(poke).length > 0) ?
                <div className={`${s.detail}`}>

                    {
                        poke.id.length > 9 ?
                        <div className={`${s.card}`} >
                            <div className={`${s.homeImg}`}>
                                <div className={`${s.buttonBox}`}>
                                    <button className={`${s.theButton}`} onClick={(e)=> handleOnClick(e)}><Link className={`${s.link}`} to={'/home'}> Home</Link></button>
                                </div>
                                <div className={`${s.circle}`}></div>
                                <img src={poke.img} alt=""  /> 

                            </div>
                            <div className={`${s.stats}`} >
                                <h2> {poke.name} </h2>
                                <p> Hp : {poke.hp} </p>
                                <p> Attack : {poke.attack} </p>
                                <p> Defense : {poke.defense} </p>
                                <p> Speed : {poke.speed} </p>
                                <p> Weight : {poke.weight} </p>
                                <p> Height : {poke.height} </p>
                                <p className={`${s.typesTitle}`}>Types </p>
                                <div className={`${s.typesBox}`}>
                                    {poke.types.map((type,index) => {
                                        return (<p key={index}>{type.name}</p>)
                                    })}
                                </div>
                            </div>
                        </div>
                        :
                        <div className={`${s.card}`}>    
                            <div className={`${s.homeImg}`}>
                                <div className={`${s.buttonBox}`}>
                                    <button className={`${s.theButton}`} onClick={(e)=> handleOnClick(e)}><Link className={`${s.link}`}  to={'/home'}> Home</Link></button>
                                </div>
                                <div className={`${s.circle}`}></div>
                                <img src={poke.sprites.other.home.front_default} alt="" /> 
                            </div>  
                            <div className={`${s.stats}`}>
                                <h2> {poke.name.toUpperCase()} </h2>
                                <p> Hp : {poke.stats[0].base_stat} </p>
                                <p> Attack : {poke.stats[1].base_stat} </p>
                                <p> Defense : {poke.stats[2].base_stat} </p>
                                <p> Speed : {poke.stats[5].base_stat} </p>
                                <p> Weight : {poke.weight} </p>
                                <p> Height : {poke.height} </p>
                                <p className={`${s.typesTitle}`}>Types </p>
                                <div className={`${s.typesBox}`}>
                                    {poke.types.map((type,index) => {
                                        return (<p key={index}>{type.type.name}</p>)
                                    })}

                                </div>

                            </div>
                        </div>
                    }

                </div>
                :
                <h1>Cargando ...</h1>

            }
        </React.Fragment>
    )
}