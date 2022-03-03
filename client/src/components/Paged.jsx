import React from 'react' ;


export default function Paged ({allPokemons,pokesToRender,paginado}) {
    const pageNumbers = [] ;
    for (let i = 1; i < Math.ceil(allPokemons/pokesToRender); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {   pageNumbers &&
                    pageNumbers.map( num => {return (
                        <li key={num}>
                            <a  onClick={()=> paginado(num)} >{num}</a>
                        </li>)}
                    )
                }
            </ul>
        </nav>

    )
}