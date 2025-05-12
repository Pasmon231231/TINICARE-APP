import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import { ArrowLeft } from 'lucide-react';

interface CategoryViewProps {
  category: Category;
}

const CategoryView: React.FC<CategoryViewProps> = ({ category }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        bgColor={category.color}
        textColor="white"
        title={category.title}
      />
      
      <div className="container mx-auto px-4 py-6 flex-1">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Volver</span>
        </button>
        
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: category.color }}>
            {category.description}
          </h1>
          <p className="text-gray-600">
            Aquí encontrarás información importante sobre {category.title.toLowerCase()}.
          </p>
        </div>
        
        <div className="space-y-6 pb-8">
          {category.content.map((infoItem, index) => (
            <InfoCard
              key={index}
              title={infoItem.title}
              content={infoItem.content}
              bgColor={category.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;