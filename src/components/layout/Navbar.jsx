import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md stuicky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Your Place logo */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <span className="text-xl sm:test-2xl font-bold text-primary-600">Your Place</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/explore"
              className="text-ray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Explore
            </Link>

            {user ? (
              <>
                {/* If host or admin, will show Host Dashboard */}
                {user.role === 'host' || user.role === 'admin' ? (
                  <Link
                    to="/host"
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    Host Dashboard
                  </Link>
                ) : (
                    /* If a regular user, show link option to Become a Host */
                  <Link
                    to="/become-host"
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    Become a Host
                  </Link>
                )}

                <Link
                  to="/bookings"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  My Bookings
                </Link>
                
                {/* Only show admin link for admin users */}
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    Admin
                  </Link>
                )}

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{user.fullName || user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Public users - NEW: Become a Host link added */}
                <Link
                  to="/become-host"
                  className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  Become a Host
                </Link>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/explore"
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              Explore
            </Link>

            {user ? (
              <>
                {user.role === 'host' || user.role === 'admin' ? (
                  <Link
                    to="/host"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    Host Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/become-host"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-gray-50"
                  >
                    Become a Host
                  </Link>
                )}

                <Link
                  to="/bookings"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                >
                  My Bookings
                </Link>

                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    Admin
                  </Link>
                )}

                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="px-3 mb-2">
                    <p className="text-sm font-medium text-gray-900">
                      {user.fullName || user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Public users mobile - NEW: Become a Host added */}
                <Link
                  to="/become-host"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-gray-50"
                >
                  Become a Host
                </Link>
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
