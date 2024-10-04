// pages/assets.tsx
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

export default function Assets() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const currentSession = supabase.auth.session()
    setSession(currentSession)

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    if (!currentSession) {
      window.location.href = '/login'  // Redirect to login if not authenticated
    }
  }, [])

  if (!session) return null  // Render nothing while session is loading

  return (
    <div>
      <h1 className="text-3xl font-bold">Your Assets</h1>
      <p>Only authenticated users can see this page.</p>
      {/* Display user-specific content */}
    </div>
  )
}
