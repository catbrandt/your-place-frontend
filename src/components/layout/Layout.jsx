import { Outlet } from 'react-router-dom';
import Navbar from '.Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content area - grows or shrinks to fill screen space */}
      <main className="flex-grow">
        <Outlet /> {/* Child route */}
      </main>

      <Footer />
    </div>
  );
}
