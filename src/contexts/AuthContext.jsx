import { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, getMe } from '@/api/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch data from backend 
      getMe()
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        // Token invalid, clear it
        localStorage.removeItem('token');
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  },[]);

  const login = async (credentials) => {
    // Call backend API
    const response = await apiLogin(credentials);

    // Backend returns: { token, user }
    const { token, user } = response.data;

    // Save token to local storage
    localStorage.setItem('token', token);

    // Save user to state
    setUser(user);
    return response;
  };

  const register = async (userData) => {
    // Call backend API
    const response = await apiRegister(userData);

    // Backend returns: { token, user }
    const { token, user } = response.data;

    // Save token to local storage
    localStorage.setItem('token', token);

    // Save user to state
    setUser(user);
    return response;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

    return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>{children}</AuthContext.Provider>
    );
  }

export function useAuth() {
    return useContext(AuthContext);
}

