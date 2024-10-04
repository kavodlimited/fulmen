import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import { useRouter } from 'next/router'

export default function Assets() {
  const [session, setSession] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)

      if (!session) {
        router.push('/login') // Redirect to login if no session
      }
    }

    getSession()

  }, [router]) // Add router as a dependency to avoid the missing dependency warning

  if (!session) return null // Avoid rendering page until session is verified

  return (
    <div>
      <h1>Assets</h1>
      <p>Welcome to the assets management page. Only authenticated users can see this.</p>
    </div>
  )
}
