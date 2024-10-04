// app/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-6">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Fulmen</p>
      </footer>
    </div>
  );
}
