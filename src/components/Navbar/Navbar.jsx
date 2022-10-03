import React from 'react';
import './Navbar.css';

//BEM block element modifier
const Navbar = () => {
    return (
        <div class="navbar">
            <ul class="nav-links">
            <div class="menu">
                <li><a href="#About">About Me</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#CS">CS</a></li>
                <li><a href="#Skills">CS Skills</a></li>
                <li class="services">
                <a href="#Contact">More ∨</a>
           <ul class="dropdown">
                <li><a href="https://www.linkedin.com/in/michael-danzi-559770214/"target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/danzi13"target="_blank">Github</a></li>
                <li><a href="https://twitter.com/danzi_michael"target="_blank">Twitter</a></li>
                <li><a href="https://www.chess.com/member/mdanzi" target="_blank">Chess.com</a></li>
           </ul>
         </li>
         <li><a href = "running.html">Running</a></li>
       </div>
       </ul>
       </div>
    
    )
} 

export default Navbar
