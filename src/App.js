import React, { useState } from 'react';
import './index.css';



export default function App() {
  const [values, setValues] = useState({
    name: "",
    rollnumber: "",
    email: "",
    number: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handlenameInputChange = (event) => {
    setValues({...values, name: event.target.value })
  }

  const handlerollnumberInputChange = (event) => {
    setValues({...values, rollnumber: event.target.value })
  }

  const handleemailInputChange = (event) => {
    setValues({...values, email: event.target.value })
  }

  const handlenumberInputChange = (event) => {
    setValues({...values, number: event.target.value })
  }

  const handlepasswordInputChange = (event) => {
    setValues({...values, password: event.target.value })
  }

  const handleconfirmpasswordInputChange = (event) => {
    setValues({...values, confirmpassword: event.target.value })
  }

  const handlesubmit = (event) =>{
    event.preventDefault();
    if(values.name && values.rollnumber && values.email && values.number && values.password && values.confirmpassword){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handlesubmit}>
        {submitted && valid ?<div className="success-message">You had Succesfully Registered</div>: null}
 
 
        <input
          disabled={submitted}
          onChange={handlenameInputChange}
          value={values.name}
          class="form-field"
          placeholder="Name"
          name="name"
        />
        {submitted && !values.name ?<span>Please enter your name</span>:null}


        <input
          disabled={submitted}
          onChange={handlerollnumberInputChange}
          value={values.rollnumber}
          class="form-field"
          placeholder="Roll Number"
          name="rollnumber"
        />
        {submitted && !values.rollnumber ? <span>Please enter your roll number</span>: null}


        <input
          disabled={submitted}
          onChange={handleemailInputChange}
          value={values.email}
          class="form-field"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter your smail</span>: null}


        <input
         disabled={submitted}
         onChange={handlenumberInputChange}
         class="form-field"
         type="text"
         placeholder="Contact Number"
         name="number"
        />
        {submitted && !values.number ?<span>Please enter your phone number</span>: null}


        <input
         disabled={submitted}
         onChange={handlepasswordInputChange}
         class="form-field"
         type="text"
         placeholder="Password"
         name="password"
        />
        {submitted && !values.password ?<span>Please enter a valid input</span>: null}


        <input
         disabled={submitted}
         onChange={handleconfirmpasswordInputChange}
         class="form-field"
         type="text"
         placeholder="Confirm Password"
         name="confirmpassword"
        />
        {submitted && !values.confirmpassword ?<span>Please enter a valid input</span>: null}


        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

/*import validator from 'validator' 

validatePhoneNumber = (number) => {
 const isValidPhoneNumber = validator.isMobilePhone(number)
 return (isValidPhoneNumber)
}


console.log(validatePhoneNumber('react')) //=> false
console.log(validatePhoneNumber('0641732123')) //=> true

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const App = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  return (
    <div
      style={{
        marginLeft: "30%",
      }}
    >
      <h4>How to show and hide password in ReactJS?</h4>
      <InputLabel htmlFor="standard-adornment-password">
        Enter your Password
      </InputLabel>
      <Input
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};
  
export default App;*/