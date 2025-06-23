import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const checkPassword = (e) => {
    e.preventDefault();
    if (password === '12345') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('authorized', 'true');
        router.push('/');
      }
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      background: '#fff'
    }}>
      <h1>🔐 Enter Password</h1>
      <form onSubmit={checkPassword} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: 'hotpink',
          border: 'none',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}>Unlock</button>
      </form>
    </div>
  );
}
