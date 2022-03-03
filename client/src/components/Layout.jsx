import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons ,getAllTypes  } from "../actions";
export default function Landing () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons()); // lo mismo que hacer mapdispatchtoprops
        dispatch(getAllTypes())
        console.log('se despacharon las acciones');
      }, [dispatch]);

    return (
        <div>
            <h1>PokeApp</h1>
            <Link to = '/home'>
                <button>
                    Ingresar 
                </button>
            </Link>
        </div>
    )
} 