
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home.js'
import Projects from './Pages/Projects'
import RNECTNavbar from './Components/RNECTNavbar';

function App() {
  return (
    <BrowserRouter>
      <RNECTNavbar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
