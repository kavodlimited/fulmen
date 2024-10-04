// layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-blueberry text-white">
      {/* Header */}
      <header className="bg-blueberryLight p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-blueberryBlack">Fulmen</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 bg-blueberryMedium">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blueberryDark text-white p-4">
        <div className="container mx-auto">
          <p className="text-center">© 2024 Fulmen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
