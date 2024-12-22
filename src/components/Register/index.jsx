import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './index.css'; // O'zingizning CSS faylingizni qo'shishni unutmang
import '../../Firebase/config'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create an instance of useNavigate to handle navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    // Yuborish yoki backendga ulanishni shu yerda qo'shing
  };

  const handleLoginClick = () => {
    // Redirect to /login when the Login button is clicked
    navigate('/login'); // Use navigate to go to the /login route
  };

  const signuphande = () => {

    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        alert("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi");
        navigate('/login'); // Ro'yxatdan o'tgandan keyin Loginga yo'naltirish
      })
      .catch((e) => alert(e.error));
  }

  return (
    <div className="Signup">
      <section className="wrapper">
      {/* Signup Form */}
      { (
        <div className="form signup">
          <header>Signup</header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button id='signup-btn1'  onClick={signuphande}>Signup</button>
          </form>
        </div>
      )}

      <div className="toggle">
        { (
          <span>
            Already have an account?{' '}
            <button onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
              Login
            </button>
          </span>
        ) }
      </div>
    </section>
    </div>
    
  );
}

export default SignupForm;
