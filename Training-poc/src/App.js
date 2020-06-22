import React,{useState } from 'react';
import {Route , NavLink, Switch} from 'react-router-dom'
import NewFormApp from './Components/NewFormApp'
import Home from './Components/Home'
import FormData from './Components/FormData'
import './App.css';


function App() {
  const [btnshow,setBtnShow]= useState(true)
  return (
    <div className="App">
     <nav className="Toolbar">
        
        <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
        <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/home" style={{color:'white'}}>Home</NavLink>
            </li>
            <li style={{ margin: '10px', display: 'inline-block'}}>
            <NavLink to="/Users"style={{color:'white'}} >Users</NavLink>
            </li>
          <li style={{ margin: '10px', display: 'inline-block'}}>
            <NavLink to="/formapp"style={{color:'white'}} >FormApp</NavLink>
          </li>
          </ul>
     </nav>
     <Switch>
     <Route path="/formapp" component={NewFormApp} />
         <Route path="/home" component={Home} />
         <Route path="/Users" render={()=><FormData show={btnshow}/>} />
       <Route component={Home} />
     </Switch>
    
    </div>
  );
}

export default App;
