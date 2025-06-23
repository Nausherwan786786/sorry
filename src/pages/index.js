import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('authorized');
    if (isAuth !== 'true') {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>🎉 Welcome to the Sorry Website!</h1>
    </div>
  );
}