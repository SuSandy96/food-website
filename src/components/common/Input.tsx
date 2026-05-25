import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  required?: boolean;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  label,
  required = false,
  name
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-dark mb-2">
          {label}
          {required && <span className="text-accent">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      />
    </div>
  );
};
