import s from "./styles/Nav.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import {getAllPokemons , resetAllPokemons , getAllTypes} from "../actions";
  import { useDispatch } from "react-redux";


export default function Nav ({setOpenFilters , openFilters , setOrder, setCurrentPage }) {
    const dispatch = useDispatch();
    function handleClick(e) {
        // e.preventDefault();

        dispatch(resetAllPokemons());
        dispatch(getAllPokemons());
        dispatch(getAllTypes());

      }
    return (
        <nav>
        <div className={`${s.searchbar}`}>
          <img className={`${s.filterImg}`} onClick={()=>setOpenFilters(!openFilters)} src="/images/filterimage.svg" alt="pokeball"  />
          <SearchBar setCurrentPage = {setCurrentPage}></SearchBar>
        </div>
        <div className={`${s.aboutCreate}`}>
          <Link className={`${s.about}`} to="/about">
            About Me
          </Link>
          <Link className={`${s.create}`} to="/createPoke">
            Create Pokemon
          </Link>
          <button className={`${s.reload}`} onClick={(e) => handleClick(e)}>
            Reload Pokes
          </button>
        </div>
      </nav>
    )
}