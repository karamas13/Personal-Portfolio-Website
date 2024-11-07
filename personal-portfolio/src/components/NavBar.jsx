import {FaLinkedin, FaSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaSquareEnvelope} from "react-icons/fa6";
import logo from "../assets/Logo.png";




const NavBar = () => {
    return ( 
        <nav className="mb-20 flex items-center justify-between py-6">
          <div className="flex flex-shrink-0 items-center">
             <img className="h-20" src={logo} alt="Nick Karamaroudis Development Logo" />
          </div>
          <div className="m-8 flex items-center justify-center gap-6 text-3xl">
          <div className="text-center tracking-tighter my-2">
           <div className="flex justify-center items-center lg:gap-10 text-4xl my-2 gap-6">
             <a href="https://www.linkedin.com/in/nikos-karamaroudis-06676a233/" target="_blank" title="Connect with me on LinkedIn" rel="noopener noreferrer"><FaLinkedin /></a>
             <a href="https://github.com/karamas13" target="_blank" title="Connect with me on GitHub" rel="noopener noreferrer"><FaGithub /></a>
             <a href="https://www.instagram.com/nikos_krms/" target="_blank" title="Connect with me on Instagram" rel="noopener noreferrer"><FaInstagram /></a>
             <a href="mailto:nickkaramas@gmail.com" title="Connect with me via Email" rel="noopener noreferrer"><FaSquareEnvelope /></a>
            </div>             
       </div>
          </div>
        </nav>
     );
}
 
export default NavBar;