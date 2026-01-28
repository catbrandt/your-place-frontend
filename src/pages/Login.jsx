// Placeholder Page
export default function Login() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-display text-primary-500">Login</h1>
      <p className="mt-4">Coming Soon...</p>
    </div>
  );
}

// import { useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '@/AuthContext';

// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();

//   // Get the page they were trying to access (e.g., '/become-host')
//   const from = location.state?.from || '/';

//   const handleLogin = async (credentials) => {
//     await login(credentials);
//     // Redirect back to where they came from
//     navigate(from);
//   };

//   // ... rest of login form to be completed under
// }
