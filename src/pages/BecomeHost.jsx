import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BecomeHostForm } from '@/features/host-application/components/BecomeHostForm';
import { HostBenefits } from '@/features/host-application/components/HostBenefits';
import { ApplicationStatus } from '@/features/host-application/components/ApplicationStatus';
import { useAuth } from '@/contexts/AuthContext';
import { useApplicationStatus } from '@/features/host-application/hooks/useApplicationStatus';

export function BecomeHost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { application, loading } = useApplicationStatus();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      // Save the intended destination so we can redirect back after login
      navigate('/login', { state: { from: '/become-host' } });
    }
  }, [user, navigate]);

  // If user is already a host, redirect to host dashboard
  if (user?.role === 'host' || user?.role === 'admin') {
    navigate('/host');
    return null;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // If they have a pending/approved/rejected application
  if (application) {
    return <ApplicationStatus application={application} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Become a Host</h1>
        <p className="text-xl text-gray-600">
          Share your space or host events to connect with your community
        </p>
      </section>

      {/* Benefits section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why Host on Your Place?</h2>
        <HostBenefits />
      </section>

      {/* Application form */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Apply to Become a Host</h2>
        <BecomeHostForm />
      </section>
    </div>
  );
}
