import React, {useEffect} from 'react';
import {getPokeById,deletePokeById, filterByOrigin, deletePoke ,resetAllPokemons, getAllPokemons, getAllTypes} from '../actions'
import {useDispatch, useSelector} from 'react-redux';
import {useParams,Link , useNavigate} from 'react-router-dom';
import s from './styles/Detail.module.css';
import Loading from './Loading';
export default function Detail () {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const poke = useSelector(state => state.poke)
    const {id} = useParams()
    useEffect(()=> {
        dispatch(getPokeById((id)))
        
    }, [dispatch,id])
    function handleOnClick (e) {
        e.preventDefault()
        dispatch(deletePokeById());
        dispatch(filterByOrigin('all'));
        navigate('/home')
    }
    function handleClickDelete (e) {
        e.preventDefault()
        dispatch(deletePoke(poke.id))
        dispatch(deletePokeById());
        dispatch(resetAllPokemons())
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
        navigate('/home')
    }

    function handleClickEdit(e) {
        e.preventDefault() ;
        navigate('/editPoke')
    }
    return (

        <React.Fragment >
            {
                (Object.keys(poke).length > 0) ?
                <div className={`${s.detail}`}>

                    {
                        poke.id.length > 9 ?
                        <div className={`${s.card}`} >
                            <div>


                            </div>
                            <div className={`${s.homeImg}`}>
                                <div className={`${s.buttonBox}`}>
                                <Link className={`${s.link}`} to={'/home'}>
                                    <button 
                                    className={`${s.theButton}`} 
                                    onClick={(e)=> handleOnClick(e)}>
                                            Home
                                    </button>
                                </Link>
                                <div className={`${s.deleteEditBox}`}>
                                    <button className={`${s.deleteButton}`} onClick={(e)=> handleClickDelete(e)}>
                                        Delete 
                                    </button> 
                                    <button className={`${s.editButton}`} onClick={(e)=> handleClickEdit(e)} >
                                        Edit 
                                    </button>
                                </div>

                                </div>

                                <div className={`${s.circle}`}></div>
                                <img src={poke.img} alt="" height={'300px'}  /> 

                            </div>
                            <div className={`${s.stats}`} >
                                <h2> {poke.name} </h2>
                                <div className={`${s.containers}`} >
                                    <p className={`${s.statTitle}`}> Hp </p><p> {poke.hp} </p>     
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Attack </p><p> {poke.attack} </p> 
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Defense </p><p> {poke.defense} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Speed </p><p> {poke.speed} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Weight </p><p> {poke.weight} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Height </p><p> {poke.height} </p>
                                </div>
                                <p className={`${s.typesTitle}`}>Types </p>
                                <div className={`${s.typesBox}`}>
                                    {poke.types.map((type,index) => {
                                        return (<p className={`${s.type}`} key = {index} value = {type.name} >{type.name}</p>)
                                    })}
                                </div>
                            </div>
                        </div>
                        :
                        <div className={`${s.card}`}>    
                            <div className={`${s.homeImg}`}>
                                <div className={`${s.buttonBox}`}>
                                <Link className={`${s.link}`}  to={'/home'}> 
                                    <button className={`${s.theButton}`} onClick={(e)=> handleOnClick(e)}>Home</button>
                                </Link>
                                </div>
                                <div className={`${s.circle}`}></div>
                                <img src={poke.sprites.other.home.front_default} alt=""  /> 
                            </div>  
                            <div className={`${s.stats}`}>
                        <h2> {poke.name.toUpperCase()} </h2>
                                <div className={`${s.containers}`} >
                                    <p className={`${s.statTitle}`}> Hp  </p> <p> {poke.stats[0].base_stat} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Attack </p><p> {poke.stats[1].base_stat} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Defense </p><p> {poke.stats[2].base_stat} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Speed </p><p> {poke.stats[5].base_stat} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Weight </p><p> {poke.weight} </p>
                                </div>
                                <div className={`${s.containers}`}>
                                    <p className={`${s.statTitle}`}> Height </p><p> {poke.height} </p>
                                </div>
                                <p className={`${s.typesTitle}`}>Types </p>
                                <div className={`${s.typesBox}`}>
                                    {poke.types.map((type,index) => {
                                        return (<p className={`${s.type}`} value = {type.type.name} key={index}>{type.type.name}</p>)
                                    })}

                                </div>

                            </div>
                        </div>
                    }
                </div>

                :
                <div className={`${s.detail}`}>
                    <Loading></Loading>

                </div>

            }
        </React.Fragment>
    )
}