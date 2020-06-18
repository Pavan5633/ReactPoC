import React from 'react';
import {Route , NavLink, Switch} from 'react-router-dom'
import FormApp from './Components/FormApp'
import Home from './Components/Home'
import './App.css';


function App() {
  return (
    <div className="App">
     <nav className="Toolbar">
        
        <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
        <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/home" style={{color:'white'}}>Home</NavLink>
            </li>
          <li style={{ margin: '10px', display: 'inline-block'}}>
            <NavLink to="/formapp"style={{color:'white'}} >FormApp</NavLink>
          </li>
          </ul>
     </nav>
     <Switch>
     <Route path="/formapp" component={FormApp} />
         <Route path="/home" component={Home} />
       <Route component={Home} />
     </Switch>
    
    </div>
  );
}

export default App;
