import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function ProtectedRoute({ children, role }) {
    const { user } = useAuth();

    // Not logged in - redirect to login page
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Role required but user role does not match - redirect to 'Home'
    if (role && user.role !== role) {
        return <Navigate to="/" replace />;
    }

    // Pass of all checks - render the children
    return children;
}