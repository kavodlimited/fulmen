// components/Navbar.tsx
import { supabase } from '../utils/supabase'

const Navbar = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      window.location.href = '/login'  // Redirect to login after logout
   
