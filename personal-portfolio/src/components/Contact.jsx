import { CONTACT } from "../constants"
import {FaLinkedin, FaSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaSquareEnvelope} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
       <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
       <div className="text-center tracking-tighter">
         <p className="my-4 text-2xl">{CONTACT.address}</p>
         <a href="mailto:nickkaramas@gmail.com" className="underline text-xl">Email: {CONTACT.email}</a>
       </div>
       <div className="text-center tracking-tighter my-20">
        <h2 className="text-2xl">Find Me In</h2>
           <div className="flex justify-center items-center gap-20 text-9xl mt-10">
             <a href="https://www.linkedin.com/in/nikos-karamaroudis-06676a233/" target="_blank"><FaLinkedin /></a>
             <a href="https://github.com/karamas13" target="_blank"><FaGithub /></a>
             <a href="https://www.instagram.com/nikos_krms/" target="_blank"><FaInstagram /></a>
            </div>             
       </div>
    </div>
  )
}

export default Contact