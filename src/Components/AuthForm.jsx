import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { deleteToken } from './Tokenhandler';

import classes from './AuthForm.module.css';

export const DUMMYDETAILS={
    email:'abc@gmail.com',
    password:'abc@123'
}


function AuthForm() {
    const navigate = useNavigate();
  const [enteredDetails,setEnteredDetails]=useState({
    email:'',
    password:''
  })
  const [error, setError] = useState('');

  function handleChange(e, key) {
    setEnteredDetails({
        ...enteredDetails,
        [key]: e.target.value,
    })
}

  function handleSubmit(e){
    e.preventDefault();
    const email=enteredDetails.email;
    const password=enteredDetails.password;

    if(!email || !password){
        setError('Please Enter required data');
        return
    }

    
    if (email===DUMMYDETAILS.email && password===DUMMYDETAILS.password) {  
        // to create random token eg Token66
        const token = 'Token'+Math.floor(Math.random() * 100);
        localStorage.setItem('token', token)

        setTimeout(() => {
            deleteToken();
            navigate('/login')},300000);
    return navigate('/dashboard')
    }
    else{
        setError('Wrong Email or Password !!')
    }

  }



  return (
    <>
      <Form  className={classes.form}>
       
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required onChange={(e)=>handleChange(e,'email')}/>
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required onChange={(e)=>handleChange(e,'password')}/>
        </p>
        <div className={classes.actions}>
          
          <button onClick={handleSubmit}>Login</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
