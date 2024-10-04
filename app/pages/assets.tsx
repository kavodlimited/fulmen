import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import { useRouter } from 'next/router'
import { Session } from '@supabase/supabase-js' // Import the Session type

export default function Assets() {
  // Explicitly define session type as either Session or null
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session) // session can be null or a valid Session object

      if (!session) {
        router.push('/login') // Redirect to login if no session
      }
    }

    getSession()
  }, [router])

  if (!session) return null // Don't render page until session is verified

  return (
    <div>
      <h1>Assets</h1>
      <p>Welcome to the assets management page. Only authenticated users can see this.</p>
    </div>
  )
}
