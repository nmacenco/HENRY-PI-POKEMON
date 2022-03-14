
import React from 'react' ;

import {useDispatch} from 'react-redux'
import {  useNavigate } from "react-router-dom";
import {pokeNotFoundReset,filterByOrigin} from "../actions";
import s from './styles/Error404.module.css'


export default function Error404 (){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleOnClick (e) {
        e.preventDefault() ;
        dispatch(pokeNotFoundReset())
        dispatch(filterByOrigin('all'))
        navigate('/home')
    }
    return (
        <div className={`${s.container}`} >
            <div className={`${s.imgContainer}`}>
                <img src="/images/pikachullorando.webp" alt=""  />
                <h1>404 Not Found...</h1>
                
                <button className={`${s.theButton}`} onClick={(e => handleOnClick(e))}  >Back to home</button>

            </div>
        </div>
    )
}