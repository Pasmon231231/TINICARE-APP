import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CategoryView from './pages/CategoryView';
import ProtectedRoute from './components/ProtectedRoute';
import { categories } from './data/categories';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 font-['Poppins']">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            {categories.map((category) => (
              <Route 
                key={category.id}
                path={`/category/${category.id}`} 
                element={
                  <ProtectedRoute>
                    <CategoryView category={category} />
                  </ProtectedRoute>
                } 
              />
            ))}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;