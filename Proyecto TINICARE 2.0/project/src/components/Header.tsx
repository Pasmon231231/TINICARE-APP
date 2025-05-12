import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  bgColor?: string;
  textColor?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  bgColor = '#88C9BF', 
  textColor = 'white',
  title = 'TinyCare'
}) => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <header 
      className="py-3 px-4 shadow-sm"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 
          className="text-xl font-semibold"
          style={{ color: textColor }}
        >
          {title}
        </h1>
        
        <div className="relative">
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: textColor }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser && (
              <div 
                className="flex items-center text-sm"
                style={{ color: textColor }}
              >
                <User size={16} className="mr-1" />
                <span>{currentUser.first_name} {currentUser.last_name}</span>
              </div>
            )}
            
            <button
              onClick={handleLogout}
              className="flex items-center text-sm hover:underline"
              style={{ color: textColor }}
            >
              <LogOut size={16} className="mr-1" />
              <span>Cerrar sesión</span>
            </button>
          </div>
          
          {/* Mobile menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 md:hidden">
              {currentUser && (
                <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                  <div className="font-medium">{currentUser.first_name} {currentUser.last_name}</div>
                  <div className="text-gray-500 text-xs mt-1 truncate">{currentUser.email}</div>
                </div>
              )}
              
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;