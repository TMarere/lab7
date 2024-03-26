import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

import { Component, useState } from 'react';


// code used from w3 schools on how to make a form https://www.w3schools.com/react/react_forms.asp
function App() {
  
  

  

  return (
    // code used from W3 schools link: https://www.w3schools.com/bootstrap/bootstrap_get_started.asp
    <div className="App">
  <div style={{color:"black"}} class="jumbotron text-center">
  <h2> Use Sign UP</h2>
  
  <form >

  <label>First Name</label>
    <input type="text"  />


    <label>Last Name</label>
    <input type='text'  />

    <label>Email</label>
    <input type='email' />

    <label>Password</label>
    <input type='password' />

      
    
  


  </form>
    
      <input type='submit'></input>

  




      <img src={logo} alt="added basic react logo"  />
    
    
    
      

  </div>
</div>



  
  );
    
  
}

  
  
  
  


export default App;
