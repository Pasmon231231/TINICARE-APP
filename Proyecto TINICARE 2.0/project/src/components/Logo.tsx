import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  let dimensions;
  
  switch (size) {
    case 'small':
      dimensions = 'w-16 h-16';
      break;
    case 'large':
      dimensions = 'w-32 h-32';
      break;
    case 'medium':
    default:
      dimensions = 'w-24 h-24';
  }
  
  return (
    <div className={`${dimensions} rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md`}>
      <Heart className="text-white" size={size === 'small' ? 32 : size === 'large' ? 64 : 48} />
    </div>
  );
};

export default Logo;