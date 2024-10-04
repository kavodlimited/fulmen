// pages/profile.js
import { useAuth } from '../lib/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  if (!user) return <p>Redirecting...</p>;

  return <div>Welcome, {user.email}!</div>;
}
