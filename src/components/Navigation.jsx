import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import { Link, Route, Routes ,NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navigationbar from "./Navigationbar";
import Footer from "./footer";

const getclassName = ({isActive}) => (isActive ? "active" : null)

export default function Navigation(){
    return(
        <div>
            <Navigationbar/>
            <ul>
                <li>
                    <NavLink end to="/" className={getclassName}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contactus" className={getclassName}>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus" className={getclassName}>About Us</NavLink>
                </li>
            </ul>
           
         
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/contactus" element={<Contactus/>}/>
                    <Route path="/aboutus" element={<Aboutus/>}/>
                </Routes>
                <Footer/>  
        
        </div>
    )
}