import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6"


const Nav= ()=>{

    return(
        <>
         <nav className="bg-grey mb-20 flex item-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
               <p className="text-4xl ml-5">SG</p>
            </div>

         <div className="m-8 flex item-center justify-center gap-4 text-2xl cursor-pointer ">

         <a href="https://www.linkedin.com/in/suraj-gupta-1894051ba/"><FaLinkedin className="hover:c-white"/></a> 
         <a href="https://github.com/surajgupt01"><FaGithub className="hover:color-white"/></a> 
         {/* <a href=""><FaInstagram className="hover:bg-white"/></a> 
         <a href=""><FaSquareXTwitter className="hover:-white"/></a>  */}

         </div>
         </nav>

        
         </>
    
        )


};

export default Nav;