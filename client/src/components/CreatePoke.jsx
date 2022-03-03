
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink,useNavigate} from 'react-router-dom';
import {createPoke , getAllTypes } from '../actions';
import {validate} from '../utils/formValidations'

export default function CreatePoke () {

    const dispatch = useDispatch();
    const history = useNavigate()
    const allTypes = useSelector( state => state.types);

    const [input , setInput] = useState({
        types : [],
    })
    let [errors , setErrors] = useState({})

    useEffect (()=> {
        dispatch(getAllTypes())
    }, [dispatch])

    function handleOnChange (e) {
        setInput( (prev) => ({
            ...prev , 
            [e.target.name] : e.target.value
          }))
          console.log(errors);
        }
    function handleOnBlur (e){
        setErrors( (prev) =>  validate( {
          ...prev, 
          [e.target.name] : e.target.value
        }))
        console.log(errors);
    }    
    function handleSelectType (e) {
        e.preventDefault();
        setInput({
            ...input , 
            types : [...input.types , e.target.value]
        })
        
    }
    function handleSubmit (e){
        if (Object.keys(errors).length > 0){
            e.preventDefault();
            alert ('Todos los campos son requeridos')
        } else {
            console.log(input);
            dispatch(createPoke(input));
            e.target.reset();
            history('/home')
        }
    }
    function handleOnCLickType (e){
        e.preventDefault();
        // console.log(input.types);
        // console.log(e.target.value);
        setInput({
            ...input ,
            types : input.types.filter(type => type !== e.target.value )
        })
    }
    return (
        <div>

            <NavLink to ='/home' >Home
            </NavLink>
            <h1>Creacion de pokemon</h1>

            <form onSubmit={(e)=>handleSubmit(e)} action="" method="post">
                <label >Nombre</label>
                <input 
                    onChange={e => handleOnChange(e)} 
                    onBlur={e => handleOnBlur(e)} 
                    name = {'name'} 
                    type="text" 
                    autoFocus
                />
                {errors.name ? <p>{errors.name}</p> : null }
                <br />
                <label >Vida</label>
                <input onBlur={e => handleOnBlur(e)}   onChange={e => handleOnChange(e)} name = {'hp'} type="text" />
                {errors.hp ? <p>{errors.hp}</p> : null }
                <br />
                <label >Ataque</label>
                <input onChange={e => handleOnChange(e)} name = {'attack'} type="text" />
                <br />
                <label >Defensa</label>
                <input onChange={e => handleOnChange(e)} name = {'defense'} type="text" />
                <br />
                <label >Velocidad</label>
                <input onChange={e => handleOnChange(e)} name = {'speed'} type="text" />
                <br />
                <label >Altura</label>
                <input onChange={e => handleOnChange(e)} name = {'height'} type="text" />
                <br />
                <label >Peso</label>
                <input onChange={e => handleOnChange(e)} name = {'weight'} type="text" />
                <br />
                <label >Imagen</label>
                <input onChange={e => handleOnChange(e)} name = {'img'} type="file" />
                <br />
                <label >Tipo</label>
                <select name={'types'} defaultValue={''} onChange={e => handleSelectType(e)}>
                    <option disabled hidden   >{''}</option>
                    {
                        allTypes &&
                        allTypes.map(type => {
                            return (
                                <option key = {type.id} value={type.name}>{type.name}</option>
                            )
                        })
                    }
                </select>
                
                {
                    input.types.length > 0 &&
                    input.types.map((type,index) => {
                        return (
                            
                            <ul><li >{type} <button value={type} onClick={(e)=> handleOnCLickType(e)} >X</button></li></ul>
                        )
                    })
                }

                <button type="submit">Crear</button>
            </form>
        </div>
    )
}