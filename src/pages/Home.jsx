import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { login, logout } = useAuth();

  return (
    <div className="bg-primary-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-secondary-100/75 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-display font-bold text-primary-100 mb-4">Find the perfect space - or share yours! 
            Discover experiences, from themed and purpose built rooms, to curated events. It's all waiting for you at Your Place.
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
            <button className="bg-primary-100 hover:bg-primary-200 text-primary-500 font-semibold px-6 py-3 rounded-lg transition-colors">
              CREATE
            </button>
            <button className="bg-primary-100 hover:bg-primary-200 text-primary-500 font-semibold px-6 py-3 rounded-lg transition-colors">
              MOVE
            </button>
                      <button className="bg-primary-100 hover:bg-primary-200 text-primary-500 font-semibold px-6 py-3 rounded-lg transition-colors">
              CELEBRATE
            </button>
                      <button className="bg-primary-100 hover:bg-primary-200 text-primary-500 font-semibold px-6 py-3 rounded-lg transition-colors">
              LEARN
            </button>
                      <button className="bg-primary-100 hover:bg-primary-200 text-primary-500 font-semibold px-6 py-3 rounded-lg transition-colors">
              RELAX
            </button>
          </div>


        </div>
          <div className="bg-primary-200/75 p-8 rounded-lg shadow-lg">
            <p className="text-l font-sans font-semibold text-primary-100 mb-4">Want to become a host? Or keen to make a booking?
              Do more when you{" "}
              <Link
              to="/register"
              className="underline decoration-2 underline-offset-4 hover:font-bold transition-all"
              >
              create an account</Link>
            </p>
          </div>
      </div>
    </div>
  );
}
