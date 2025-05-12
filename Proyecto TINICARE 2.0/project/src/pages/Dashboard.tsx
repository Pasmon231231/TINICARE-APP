import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import { categories } from '../data/categories';
import { LucideWand as LucideWoman, Baby, Home, Heart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'LucideWoman':
        return <LucideWoman size={30} />;
      case 'Baby':
        return <Baby size={30} />;
      case 'Home':
        return <Home size={30} />;
      case 'Heart':
        return <Heart size={30} />;
      default:
        return <Heart size={30} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-teal-600 mb-2 text-center">
          Bienvenido{currentUser ? `, ${currentUser.first_name}` : ''}
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Selecciona una categoría para obtener información
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform"
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <div 
                className="p-6 flex flex-col items-center justify-center"
                style={{ backgroundColor: category.bgColor }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'white', color: category.color }}
                >
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 
                  className="text-lg font-semibold mb-2 text-center"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;