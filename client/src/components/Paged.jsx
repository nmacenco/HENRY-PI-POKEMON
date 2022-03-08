import React from 'react' ;

import s from './styles/Paged.module.css'

export default function Paged ({allPokemons,pokesPerPage,paginado}) {
    const pageNumbers = [] ;
    for (let i = 1; i < Math.ceil(allPokemons/pokesPerPage)+1; i++) {
        pageNumbers.push(i)
    }
    return (
        <React.Fragment>
            <ul className= {`${s.paged}`}>
                {   pageNumbers &&
                    pageNumbers.map( num => {return (
                        <li key={num}>
                            <button  onClick={()=> paginado(num)} >
                                {num}
                                {/* <img src="/images/pokeballsinfondo.png" alt="pokeball" /> */}
                                </button>
                            


                        </li>)}
                    )
                }
            </ul>
        </React.Fragment>

    )
}