import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../types';
import { getStoredUser, storeUser, clearStoredUser } from '../utils/storage';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean, message: string }>;
  register: (userData: Omit<User, 'id' | 'created_at'>) => Promise<{ success: boolean, message: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = getStoredUser();
    if (storedUser) {
      setCurrentUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean, message: string }> => {
    try {
      // For demo, we'll simulate authentication
      // In a real app, this would be an API call
      if (email === 'demo@example.com' && password === 'password') {
        const user: User = {
          id: '1',
          first_name: 'Demo',
          last_name: 'User',
          email: email,
          created_at: new Date().toISOString()
        };
        
        setCurrentUser(user);
        setIsAuthenticated(true);
        storeUser(user);
        return { success: true, message: 'Login successful' };
      }
      
      return { success: false, message: 'Invalid credentials' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'An error occurred during login' };
    }
  };

  const register = async (userData: Omit<User, 'id' | 'created_at'>): Promise<{ success: boolean, message: string }> => {
    try {
      // Simulate registration
      // In a real app, this would be an API call
      const newUser: User = {
        ...userData,
        id: Math.random().toString(36).substr(2, 9),
        created_at: new Date().toISOString()
      };
      
      setCurrentUser(newUser);
      setIsAuthenticated(true);
      storeUser(newUser);
      return { success: true, message: 'Registration successful' };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'An error occurred during registration' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    clearStoredUser();
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};