// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/assets">Assets</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© Fulmen App, 2024</p>
      </footer>
    </div>
  );
}
