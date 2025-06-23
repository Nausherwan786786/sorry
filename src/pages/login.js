import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const checkPassword = (e) => {
    e.preventDefault();
    if (password === '12345') {
      localStorage.setItem('authorized', 'true');
      router.push('/');
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
      background: '#f5f5f5',
      flexDirection: 'column'
    }}>
      <h1>🔐 Enter Password</h1>
      <form onSubmit={checkPassword} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'hotpink', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Unlock
        </button>
      </form>
    </div>
  );
}
