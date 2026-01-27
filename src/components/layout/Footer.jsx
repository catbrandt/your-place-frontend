import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bd-gray-900 text-grat-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Your Place logo - links to Homepage*/}
          <Link
            to="/"
            className="text-white text-xl font-bold hover:text-grey-300 transition-colors"
          >
            Your Place
          </Link>

          {/* Copyright */}
          <p className="text-sm">@ {currentYear} Your Place. All rights reserved.</p>

          {/* Contact Us link */}
          <Link to="/contactUs" className="text-sm hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
