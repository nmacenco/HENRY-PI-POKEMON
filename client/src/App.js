import {Routes , Route} from 'react-router-dom' ;
import Layout from './components/Layout.jsx' ;
import Home from './components/Home.jsx' ;
import CreatePoke from './components/CreatePoke.jsx' ;
import Detail from './components/Detail.jsx' ;
import Error from './components/Error404.jsx'
import s from './App.module.css' ;
import Nav from './components/Nav'

function App() {
  return (
    <div className={`${s.app}`}  >
        

      <Routes>
        <Route exact path = '/' element = {<Layout/>} />
        <Route path = '/home' element = {<Home/>} />
        <Route path = '/detail/:id' element = {<Detail/>} />
        <Route path = '/createPoke' element = {<CreatePoke/>} />
        <Route path = '/404' element = {<Error/>} />
        <Route path = '/*' element = {<Error/>} />

      </Routes> 
    </div>
  );
}

export default App;
