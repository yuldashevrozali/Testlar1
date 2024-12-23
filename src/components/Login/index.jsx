import { useState } from "react";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import './index.css';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    signInWithEmailAndPassword(getAuth(), email, password)
        .then(() => alert("Login successful"))
        .catch((e) => alert(e.message));
  };

  return (
    <>
      <div className="form login">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
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
          <a href="./forgot-password">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}

export default LoginPage;
