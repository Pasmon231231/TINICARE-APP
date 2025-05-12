import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { ArrowLeft } from 'lucide-react';

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Todos los campos son requeridos');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const result = await register({
        first_name: firstName,
        last_name: lastName,
        email,
      });
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Ocurrió un error al registrarse');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 flex flex-col items-center animate-fadeIn">
        <div className="mb-6 flex flex-col items-center">
          <Logo size="small" />
          <h1 className="text-2xl font-semibold text-teal-500 mt-2">Registro</h1>
        </div>
        
        <form onSubmit={handleRegister} className="w-full space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="María"
            />
            
            <Input
              label="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="García"
            />
          </div>
          
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
          
          <Input
            label="Confirmar contraseña"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
          />
          
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          
          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
          >
            Registrarse
          </Button>
          
          <div className="text-center mt-4">
            <Link to="/login" className="text-teal-500 hover:text-teal-600 transition-colors inline-flex items-center text-sm">
              <ArrowLeft size={16} className="mr-1" />
              Volver al login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;