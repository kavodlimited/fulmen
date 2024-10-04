// pages/_app.js
import { AuthProvider } from '../lib/AuthContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
