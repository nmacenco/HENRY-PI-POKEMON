import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons ,getAllTypes  } from "../actions";
import s from './styles/Layout.module.css'

export default function Landing () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons()); // lo mismo que hacer mapdispatchtoprops
        dispatch(getAllTypes())
        console.log('se despacharon las acciones');
      }, [dispatch]);

    return (
        <div  className={`${s.background}`} >
            <div className={`${s.redColor}`} ></div>
            <div className={`${s.blackColor}`} ></div>
            <div className={`${s.whiteColor}`}></div>
            <div className={`${s.imgLayout}`}>
                <img   src="images/pikachupokebola.jpg"  alt="" />
                {/* <img   src="https://i.pinimg.com/474x/fc/f8/8c/fcf88c891fd2db4d237f4d4f1434cd05--wallpaper-pokemon-pokemon-birthday.jpg"  alt="" /> */}

            </div>
                    <Link className={`${s.link}`}   to = '/home'>
                        <button className={`${s.layoutButton}`} >
                                Ingresar 
                        </button>
                    </Link>
        </div>
    )
} 

// pikachu 4k saludando 
// https://i.pinimg.com/236x/3c/f7/36/3cf73626a47e1780593de27368c71ad2.jpg



// carita pikachu amarillo 
// https://i.pinimg.com/564x/7c/19/62/7c1962b7a65ec76085f96e1ccf8bfc7e.jpg
// pikachu con gorra 
// https://i.pinimg.com/564x/7c/19/62/7c1962b7a65ec76085f96e1ccf8bfc7e.jpg
//pikachu con gorra sin fondo 
// https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2021/05/pokemon-pikachu-with-cap.png?resize=500%2C270&ssl=1
// https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2021/05/Pikachu-con-Gorra-Png.png?w=900&ssl=1

// fondo de pokebolla total 
// https://p4.wallpaperbetter.com/wallpaper/364/185/316/pokemon-poke-balls-artwork-wallpaper-preview.jpg

// fondo pokeball total con pikachu 
// https://i.pinimg.com/474x/fc/f8/8c/fcf88c891fd2db4d237f4d4f1434cd05--wallpaper-pokemon-pokemon-birthday.jpg

// pikachu con fondo celeste 
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Jky994BDbG1hQdSsYlH1amUA5Dqa6efIug&usqp=CAU

// pikachu con gorrita y pokebolla 
// https://i.pinimg.com/564x/43/22/49/43224971c7ab066adb223575a2f4f0fa.jpg
