// pages/index.tsx
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Fulmen</h2>
        <p className="text-lg">Manage all your assets and properties in one place.</p>
      </div>
    </Layout>
  )
}
