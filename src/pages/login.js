import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'panda123') {
      localStorage.setItem('authorized', 'true');
      router.push('/');
    } else {
      alert('❌ Wrong password!');
    }
  };

  return (
    <div style={styles.container}>
      <h1>🔒 Enter Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Unlock</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', height: '100vh', background: '#ffe4ec'
  },
  input: {
    padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid pink'
  },
  button: {
    padding: '10px 20px', background: '#ff69b4', color: '#fff',
    border: 'none', borderRadius: '5px'
  }
};
