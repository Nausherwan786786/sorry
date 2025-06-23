// src/pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const checkPassword = () => {
    if (password === '12345') {
      localStorage.setItem('authorized', 'true');
      router.push('/');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🔐 Enter Password</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br /><br />
      <button onClick={checkPassword}>Submit</button>
    </div>
  );
}
