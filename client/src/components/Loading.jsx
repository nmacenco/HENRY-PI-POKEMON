
import React from 'react' ;

import s from './styles/Loading.module.css' ;

export default function Loading (){
    return (
        <div className={`${s.container}`}>
        <img src="https://i.gifer.com/origin/11/11db04c4d12d4e682b84ca50e3a99817_w200.webp" alt=""/>
        <h1>Cargando...</h1>
        </div>
    )
}