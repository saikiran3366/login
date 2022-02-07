import React from 'react';
import {Link} from 'react-router-dom';

const WelcomeScreen = () =>{
    return(
       <div style={{height:750,backgroundColor:'blue'}}>
           <div style={{height:80,backgroundColor:'green',display:'flex',flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
              <div style={{width:'80%',height:80,backgroundColor:'red',display:'flex',flexDirection:'row',justifyContent: 'space-around'}}>
              <Link to="/TodoApp"><h4>Todo App</h4></Link>
              <Link to="/RegisterForm"><h4>Register Form</h4></Link>
               <h4>Todo App</h4>
               <h4>Register Form</h4>
              </div>
              
           </div>
       </div>

    )
}

export default WelcomeScreen