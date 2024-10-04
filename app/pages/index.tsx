// pages/index.tsx
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import Layout from '../components/layout'

export default function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const session = supabase.auth.session()
    if (session) {
      setUser(session.user)
    }
  }, [])

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fulmen</h1>
        {user ? (
          <p className="text-lg">Hello, {user.email}</p>
        ) : (
          <p className="text-lg">Please log in to manage your assets.</p>
        )}
      </div>
    </Layout>
  )
}
