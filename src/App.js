
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home.js'
import Projects from './Pages/Projects'
import Post from './Pages/Post'
import RNECTNavbar from './Components/RNECTNavbar';

const user = {
  isLogged: false,
  type: "P"
}

function App() {
  return (
    <BrowserRouter>
      <RNECTNavbar/>
      <Routes>
          <Route exact path="/" element={<Home isLogged={user.isLogged} userType={user.type}/>} />
          <Route path="/Projects" element={<Projects isLogged={user.isLogged} userType={user.type}/>}/>
          <Route path="/Post" element={<Post isLogged={user.isLogged} userType={user.type}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
