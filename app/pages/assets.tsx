// pages/assets.tsx
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import { useRouter } from 'next/router'

export default function Assets() {
  const [session, setSession] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const currentSession = supabase.auth.session()
    setSession(currentSession)

    if (!currentSession) {
      router.push('/login') // Redirect to login if no session
    }
  }, [])

  if (!session) return null // Don't render page until session is verified

  return (
    <div>
      <h1>Assets</h1>
      <p>Welcome to the assets management page. Only authenticated users can see this.</p>
    </div>
  )
}
