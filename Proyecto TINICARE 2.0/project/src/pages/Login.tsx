import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { Heart } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Todos los campos son requeridos');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const result = await login(email, password);
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Ocurrió un error al iniciar sesión');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col items-center animate-fadeIn">
        <div className="mb-6 flex flex-col items-center">
          <Logo />
          <h1 className="text-2xl font-semibold text-teal-500 mt-2">TinyCare</h1>
        </div>
        
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <Input
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
          />
          
          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          
          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
          >
            Iniciar Sesión
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              ¿No tienes una cuenta?{' '}
              <Link to="/register" className="text-teal-500 hover:text-teal-600 transition-colors">
                Regístrate
              </Link>
            </p>
          </div>
        </form>
        
        <div className="mt-8 flex items-center text-gray-500 text-xs">
          <Heart size={14} className="text-teal-500 mr-1" />
          <span>TinyCare © {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Login;