import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { login, logout } = useAuth();

  return (
    <div className="bg-secondary-100 min-h-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-primary-600 mb-4">Your Place</h1>
          <p className="text-gray-700 mb-4">
            If you see burgundy and cream colors, Tailwind styling is working! ✅
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Test Button
          </button>

          {/* Test login */}
          <div className="mt-6 space-x-4">
            <button
              onClick={() => login({ email: 'user@test.com', role: 'user', fullName: 'Test User' })}
              className="bg-primary-600 text-white px-4 py-2 rounded"
            >
              Login as User
            </button>

            <button
              onClick={() => login({ email: 'host@test.com', role: 'host', fullName: 'Test Host' })}
              className="bg-primary-600 text-white px-4 py-2 rounded"
            >
              Login as Host
            </button>

            <button onClick={() => logout()} className="bg-gray-600 text-white px-4 py-2 rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
