import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // Import useTheme hook
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './index.css'; // Custom CSS for styling
import '../../Firebase/config'; // Firebase configuration

function Hisob() {
  const theme = useTheme(); // Get the current theme
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  // Redirect to login page
  const handleLoginClick = () => {
    navigate('/Login');
  };

  // Handle user sign-up
  const signuphande = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        alert("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi");
        navigate('/Login');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="Signup" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <section className="wrapper">
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
            <button id="signup-btn1" onClick={signuphande}>Signup</button>
          </form>
        </div>

        <div className="toggle">
          <span>
            Already have an account?{' '}
            <button onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
              Login
            </button>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Hisob;
