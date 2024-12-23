import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // navigate qilish uchun

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Sahifani yo'naltirish uchun

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Parolni tiklash havolasi email manzilingizga yuborildi.');
        setTimeout(() => {
          navigate('/login'); // Parol tiklash havolasi yuborilgandan keyin Login sahifasiga yo'naltirish
        }, 2000);
      })
      .catch((error) => {
        setMessage(error.message); // Error holatini ko'rsatish
      });
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handlePasswordReset}>
        <div>
          <label htmlFor="email">Elektron pochta:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email manzilingizni kiriting"
            required
          />
        </div>
        <button type="submit">Parolni tiklash havolasini yuborish</button>
      </form>
      {message && <p>{message}</p>} {/* Xabarni ko'rsatish */}
      <button onClick={() => navigate('/login')}>Login sahifasiga qaytish</button> {/* Login sahifasiga qaytish */}
    </div>
  );
}

export default ForgotPassword;
