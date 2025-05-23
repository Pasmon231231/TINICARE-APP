import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50';
  
  const variantStyles = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 disabled:bg-teal-300',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-100 disabled:text-gray-400',
    outline: 'border border-teal-500 text-teal-500 hover:bg-teal-50 disabled:border-gray-300 disabled:text-gray-300'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;