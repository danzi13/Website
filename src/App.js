import React from 'react';

import {Projects, Navbar, Proficiency } from './components';
import {Footer, Header} from './containers';
import './App.css';

const App = () => {
  return (
    <div className ="App">
      <div className = "gradient_bg">
        
          <Navbar />
        
        <Header />
    </div>
    
      <Projects/>
      <Proficiency/>
      <Footer /> 
    </div>
  )
}

export default App

