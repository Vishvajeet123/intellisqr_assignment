import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type, register, error }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default InputField;