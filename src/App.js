import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

import { Component, useState } from 'react';


// code used from w3 schools on how to make a form https://www.w3schools.com/react/react_forms.asp
function App() {
  const [firstName , setName] = useState("");
  const [lastName , setLastName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setErrors]=useState("");

  

  

 const handleSubmit = (event) => {

  event.preventDefault(); 


// Validation user input

const errors = {};
const names =/^[A-Za-z]+$/;

// regrex help taken from https://mailtrap.io/blog/validate-emails-in-react/
const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

// regrex help used from https://dev.to/rasaf_ibrahim/write-regex-password-validation-like-a-pro-5175
const passwordValidation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

if(!firstName.trim()){
errors.firstName=" Please enter your name ";

}

else if(!names.test(firstName.trim())){
  errors.firstName ='First name can only have letters '
  console.log(firstName);

}

// last name 

if(!lastName.trim()){
  errors.lastName=" Please enter your Last name ";
  console.log(lastName);
  }
  
  else if(!names.test(lastName.trim())){
    errors.lastName ='Last name can only have letters '
    console.log(lastName);
  }

  // email
  if(!email.trim()){
    errors.email=" Please enter your email ";
    }
    
    else if(!emailValidation.test(email.trim())){
      errors.email = "Please enter a valid Email"
      console.log(email);
    
    }

   
  

    //password
    if(!password.trim()){
      errors.password=" Please enter your Password  ";
      
      }
      
      else if(!passwordValidation.test(password.trim())){
        errors.password = "Please enter a valid Password"
        console.log(password);
      }

      if(Object.keys(errors).length >0){
        setErrors(errors);
      }
      else{
        window.location.href="/src/form.js";
      }




}
  
const handleButtonClick = () => {
  document.getElementById('myForm').submit();
};

  
 
  
  

  

  return (
    // code used from W3 schools link: https://www.w3schools.com/bootstrap/bootstrap_get_started.asp
    <div className="App">
  <div style={{color:"black"}} class="jumbotron text-center">
  <h2> Use Sign UP</h2>
  
  <form id="myForm" onSubmit={handleSubmit}>

  <label>First Name</label>
    <input type="text" value={firstName} onChange={(e) => setName(e.target.value)} />


    <label>Last Name</label>
    <input type='text'value={lastName}  onChange={(e) => setLastName(e.target.value)}  />

    <label>Email</label>
    <input type='email' value={email}  onChange={(e) => setEmail(e.target.value)}/>

    <label>Password</label>
    <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>

      <h3>Favorite Season?</h3>
      <select>
        <option value="">Spring</option>
        <option value="">Fall</option>
        <option value="">Winter</option>
      </select>
    
      <button  >Submit</button>


  </form>
    
      

  




      <img src={logo} alt="added basic react logo"  />
    
    
    
      

  </div>
</div>



  
  );
    
  
}

  
  
  
  


export default App;
