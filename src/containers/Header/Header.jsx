import React from 'react';
import './Header.css';
import headShot from '../../assets/photoOfSelf.jpeg';

const Header = () => {
    return (
        <div className = "about" id ="About">
            
            <div className="Danzi-header-main">
                <img src= {headShot} alt="headShot" className = "Danzi-header-image"></img>
                <h1>Michael Danzi</h1>
                <div className="Danzi_header-p"> 
                        <p>Hello, my name is Michael Danzi. I am 
                            currently a junior at Columbia University 
                            studying computer science. I designed and 
                            developed this webpage and it lists some 
                            projects that I have done along with who I am. 
                            Apart from my education and coding, you can 
                            find me running or playing chess.  
                        </p>
                </div>
            </div>
        </div>

    )
}

export default Header