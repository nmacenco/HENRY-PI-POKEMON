import './App.css';
import {Routes , Route} from 'react-router-dom' ;
import Layout from './components/Layout.jsx' ;
import Home from './components/Home.jsx' ;
import CreatePoke from './components/CreatePoke.jsx' ;
import Detail from './components/Detail.jsx' ;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Layout/>} />
        <Route path = '/home' element = {<Home/>} />
        <Route path = '/detail/:id' element = {<Detail/>} />
        <Route path = '/createPoke' element = {<CreatePoke/>} />
      </Routes> 
    </div>
  );
}

export default App;
