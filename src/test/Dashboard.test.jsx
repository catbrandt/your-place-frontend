import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import { AuthProvider } from '@/contexts/AuthContext';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Dashboard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render correctly for host user', () => {
    localStorage.setItem('token', 'demo-token-host');
    localStorage.setItem('user', JSON.stringify({ id: 'demo-host-1', email: 'host@example.com', fullName: 'Demo Host', role: 'host' }));

    render(
      <MemoryRouter>
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      </MemoryRouter>
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
        expect(screen.getByText(/host/i)).toBeInTheDocument();
        expect(screen.getByText(/host dashboard/i)).toBeInTheDocument();
        resolve();
      }, 100);
    });
  });

  it('should render correctly for regular user', () => {
    localStorage.setItem('token', 'demo-token-user');
    localStorage.setItem('user', JSON.stringify({ id: 'demo-user-1', email: 'user@example.com', fullName: 'Demo User', role: 'user' }));

    render(
      <MemoryRouter>
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      </MemoryRouter>
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
        expect(screen.getByText(/user/i)).toBeInTheDocument();
        expect(screen.getByText(/become a host/i)).toBeInTheDocument();
        resolve();
      }, 100);
    });
  });
});
