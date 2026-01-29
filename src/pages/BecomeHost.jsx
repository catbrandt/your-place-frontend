import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BecomeHostForm } from '@/features/host-application/components/BecomeHostForm';
import { ApplicationStatus } from '@/features/host-application/components/ApplicationStatus';
import { useAuth } from '@/contexts/AuthContext';
import { useApplicationStatus } from '@/features/host-application/hooks/useApplicationStatus';

