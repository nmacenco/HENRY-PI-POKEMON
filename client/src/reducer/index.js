

const initialState = {
    pokemons : [] ,
    copyPokemons : [],
    types : [] ,
    poke : {} ,
    pokeNotFound : false , 
};

export default function rootReducer (state=initialState, action) {
   
    switch (action.type) {
        case 'GET_ALL_POKEMONS' :

        return {
            ...state , 
            pokemons : action.payload,
            copyPokemons : action.payload
            
        }
        case 'RESET_ALL_POKEMONS' :

        return {
            ...state , 
            pokemons : action.payload,
            
        }
        case 'GET_ALL_TYPES' :
            return {
                ...state , 
                types : action.payload ,
            }
        case 'GET_POKE_BY_NAME' :
            const thePokes = state.copyPokemons ;
            const findedPoke = thePokes.filter( element => element.name.toLowerCase() === action.payload.toLowerCase())
            if (findedPoke.length > 0 ) {
                return {
                    ...state, 
                    pokemons : findedPoke
                }
            } else {
                return {
                    ...state, 
                    pokeNotFound : true ,
                }
                
            }
        // case 'GET_POKE_BY_NAME' :
        //     return {
        //         ...state, 
        //         pokemons : action.payload 
        //     }
        case 'GET_POKE_BY_ID' :
            return {
                ...state, 
                poke : action.payload 
            }
        case 'DELETE_POKE_BY_ID' :
        
            return { 
                ...state , 
                poke : action.payload
            }
        
        case 'CREATE_POKE' :
            
            return { 
                ...state , 
               
            }
        
 
        case 'FILTER_BY_ORIGIN' :
            const allPokemons = state.copyPokemons ;
            const statusFiltered = action.payload === 'created' ?
                allPokemons.filter(poke => poke.createdInDataBase === true ) : 
                (
                    action.payload === 'all' ?
                    state.copyPokemons : 
                    allPokemons.filter(poke => poke.createdInDataBase === false) 
                )
            if (statusFiltered.length > 0) {
                return {    
                    ...state , 
                    pokemons : statusFiltered 
                }
            }else {
                return {
                    ...state,
                    pokeNotFound: true ,
                };
            }
        case 'FILTER_ASC_DESC' :
            const allPoke = state.pokemons ;
            let statusAscDesc = [];
                if ( action.payload === 'asc') 
                statusAscDesc = allPoke.sort(function (a,b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }else if ( a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0 ; 
                })
                else if (action.payload === 'desc' )
                statusAscDesc = allPoke.sort(function (a,b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }else if ( a.name.toLowerCase() < b.name.toLowerCase()) {
                        return 1;
                    }
                    return 0 ; 
                })
            return {
                ...state , 
                pokemons : statusAscDesc

            }
        case 'FILTER_BY_STRENGTH' :
            const allPokes = state.copyPokemons ;
            let statusStrength = [];
                if ( action.payload === 'weak') 
                statusStrength = allPokes.sort(function (a,b) {
                    if (a.attack > b.attack) {
                        return 1;
                    }else if ( a.attack < b.attack) {
                        return -1;
                    }
                    return 0 ; 
                })
                else if (action.payload === 'strong' )
                statusStrength = allPokes.sort(function (a,b) {
                    if (a.attack > b.attack) {
                        return -1;
                    }else if ( a.attack < b.attack) {
                        return 1;
                    }
                    return 0 ; 
                })
            return {
                ...state ,
                pokemons : statusStrength 
            }
        case 'FILTER_BY_TYPES' :
            const fullPokes = state.copyPokemons ; 
            const statusFiltereByTypes = fullPokes.filter(poke => poke.types[0]?.name === action.payload || poke.types[1]?.name === action.payload  )

            if (statusFiltereByTypes.length > 0 ) {
                return {
                    ...state , 
                    pokemons : statusFiltereByTypes
                }
            }else {
                return {
                    ...state,
                    pokeNotFound: true ,
                };

            }
        case "POKE_NOT_FOUND":
            return {
                ...state,
                pokeNotFound: action.payload,
            };
        
            case "POKE_NOT_FOUND_RESET":
            return {
                ...state,
                pokeNotFound: action.payload,
            };
        default :
        return state ; 
    }
}

