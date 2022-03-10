import s from "./styles/Nav.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import {getAllPokemons} from "../actions";
  import { useDispatch, useSelector } from "react-redux";
export default function Nav () {
    const dispatch = useDispatch();
    function handleClick(e) {
        // e.preventDefault();
        dispatch(getAllPokemons());
      }
    return (
        <nav>
        <div className={`${s.searchbar}`}>
          <SearchBar></SearchBar>
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