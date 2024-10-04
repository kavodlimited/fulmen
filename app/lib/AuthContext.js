// lib/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    const { error, user } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    setUser(user);
    router.push('/');
  };

  const signUp = async (email, password) => {
    const { error, user } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    setUser(user);
    router.push('/');
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
