import React from 'react';

interface InfoCardProps {
  title: string;
  content: string;
  bgColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, bgColor = 'white' }) => {
  return (
    <div 
      className="rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          {title}
        </h3>
        <div className="text-gray-600 whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;