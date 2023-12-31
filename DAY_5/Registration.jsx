import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const[username,setusername]=useState('');
    const[Role,setRole]=useState('');
    const[phonenumber,setPhonenumber]=useState('');
    const [email, setEmail] = useState('');
    const Navigate = useNavigate();
    const eventNavigate=()=>{
        Navigate("/profile")
    }
    const handleusername =(event)=>{
        setusername(event.target.value);
  }
  const handleRole =(event)=>{
    setRole(event.target.value);
  }
  
  const handlePhonenumber=(event)=>{
    setPhonenumber(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    document.write('Successfully registerd');
    console.log('username: ',username);
    console.log('Role:',Role);
    console.log('PhoneNumber:',phonenumber);
    console.log('Email:', email);

  };

  return (
    <div className="down">
    <div className="login-form">
      <h2>Edit</h2>
      <div onSubmit={handleSubmit}>
        <input
        type="username"
        placeholder='UserName'
        value={username}
        onChange={handleusername}
        required
        />
        <input
        type="Role"
        placeholder="Roles"
        value={Role}
        onChange={handleRole}
        required
        />
        <input
        type="phonenumber"
        placeholder='PhoneNumber'
        value={phonenumber}
        onChange={handlePhonenumber}
        required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <button type="submit" onClick={eventNavigate}>Change</button>
        {/* <link>Sign up</link> */}
      </div>
    </div>
    </div>
  );
};

export default Edit;
