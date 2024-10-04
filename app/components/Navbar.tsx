// components/Navbar.tsx
import { supabase } from '../utils/supabase'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      router.push('/login') // Redirect to login after logout
    }
  }

  return (
    <nav className="bg-blueberryLight p-4 flex justify-between">
      <div className="logo">
        <a href="/" className="text-2xl font-bold">Fulmen</a>
      </div>
      <div className="links">
        <a href="/assets" className="mx-4">Assets</a>
        <a href="/map" className="mx-4">Map</a>
        <button onClick={handleLogout} className="mx-4 bg-red-500 p-2 rounded">Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
