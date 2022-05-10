
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home.js'
import Projects from './Pages/Projects'
import Post from './Pages/Post'
import Applications from './Pages/Applications'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import EditProfile from './Pages/EditProfile'
import RNECTNavbar from './Components/RNECTNavbar';
import Footer from './Components/Footer'

const user = {
  name: "Eliezer Pérez Irizarry",
  isLogged: true,
  type: "S",
  preferredEmail: "eliezer.perez@gmail.com",  
  skills: ["Communication",
  "Leadership",
  "Problem-Solving"],
  major: 'Software Engineering',
  classes: ["INME 3011",
  "QUIM 3015",
  "CIIC 3075",
  "CIIC 3081",
  "CIIC 4010"],
  yearStudy: '4th' 
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <RNECTNavbar isLogged={user.isLogged} userType={user.type} userName={user.name}/>
      <Routes>
          <Route exact path="/" element={<Home isLogged={user.isLogged} userType={user.type}/>} />
          <Route path="/Projects" element={<Projects isLogged={user.isLogged} userType={user.type}/>}/>
          <Route path="/Applications" element={<Applications isLogged={user.isLogged} userType={user.type}/>}/>
          <Route path="/Post" element={<Post isLogged={user.isLogged} userType={user.type}/>}/>
          <Route path="/SignUp" element={<SignUp isLogged={user.isLogged}/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/EditProfile" element={<EditProfile isLogged={user.isLogged} userType={user.type} 
          preferredEmail={user.preferredEmail} skills={user.skills} classes={user.classes} major={user.major}
          yearStudy={user.yearStudy}/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
