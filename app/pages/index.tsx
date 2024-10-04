import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import Layout from '../components/layout'
import { Session } from '@supabase/supabase-js' // Import the Session type

export default function Home() {
  const [user, setUser] = useState<Session | null>(null)

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setUser(session.user) // Set the user if session exists
      }
    }

    getSession()
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
