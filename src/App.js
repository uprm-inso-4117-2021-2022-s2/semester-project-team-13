
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home.js'
import Projects from './Pages/Projects'
import Post from './Pages/Post'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import RNECTNavbar from './Components/RNECTNavbar';

const user = {
  name: "Pepito Pérez",
  isLogged: false,
  type: "P"
}

function App() {
  return (
    <BrowserRouter>
      <RNECTNavbar isLogged={user.isLogged} userType={user.type} userName={user.name}/>
      <Routes>
          <Route exact path="/" element={<Home isLogged={user.isLogged} userType={user.type}/>} />
          <Route path="/Projects" element={<Projects isLogged={user.isLogged} userType={user.type}/>}/>
          <Route path="/Post" element={<Post isLogged={user.isLogged} userType={user.type}/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
