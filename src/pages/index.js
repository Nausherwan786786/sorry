import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = typeof window !== 'undefined' && localStorage.getItem('authorized');
    if (isAuth !== 'true') {
      router.push('/login');
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>🌸 Welcome to the Sorry Website!</h1>
    </div>
  );
}
