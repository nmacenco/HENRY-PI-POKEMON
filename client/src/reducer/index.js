

const initialState = {
    pokemons : [] ,
    copyPokemons : [],
    types : [] ,
    poke : {} ,
};

export default function rootReducer (state=initialState, action) {
   
    switch (action.type) {
        case 'GET_ALL_POKEMONS' :
           console.log({
            ...state , 
            pokemons : action.payload,
            copyPokemons : action.payload
             });
        return {
            ...state , 
            pokemons : action.payload,
            copyPokemons : action.payload
            
        }
        case 'GET_ALL_TYPES' :
            return {
                ...state , 
                types : action.payload ,
            }
        case 'GET_POKE_BY_NAME' :
            return {
                ...state, 
                pokemons : action.payload 
            }
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
            const statusFiltered = action.payload === 'created' ? allPokemons.filter(poke => poke.createdInDataBase) : allPokemons.filter(poke => !poke.createdInDataBase) 
            // const statusFiltered = action.payload === 'all' ? allPokemons : allPokemons.filter(poke => 
            //     (poke.createdInDataBase).toString() === action.payload )

            return {    
                ...state , 
                pokemons : action.payload === 'all' ? state.copyPokemons : statusFiltered

            }
        case 'FILTER_ASC_DESC' :
            const allPoke = state.copyPokemons ;
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
            const allPokes = state.pokemons ;
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
            console.log(statusFiltereByTypes);
            return {
                ...state , 
                pokemons : statusFiltereByTypes
            }
        default :
        return state ; 
    }
}

