import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch}=useContext(ContextGlobal);
  const buttonStyle = {color:state.theme.color}
  
  
  function handleThemeChange(){
    dispatch({type:"changeTheme"});
  }

  return (
  <header>
    <div style={{display:"flex"}}> 
          <h3 className= "title"> Dentists S.A. </h3>
    </div>
    <nav className= "nav-bar">
    
          <ul>
              <Link to= "/" style={buttonStyle}>Home</Link>
            
              <Link to="/contact" style={buttonStyle} >Contact</Link>
            
              <Link to="/favs" style={buttonStyle}> Favs </Link> 
          
          </ul>
        
      <button onClick={handleThemeChange}>{state.theme.id == "light" ? "Dark" : "Light"}</button>
    </nav>
  </header>
  )
}

export default Navbar