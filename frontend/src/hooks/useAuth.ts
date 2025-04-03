

import { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login as loginApi, register as registerApi } from '../services/authService';

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (err: any, defaultMessage: string) => {
    console.error('Error:', err);
    const errorMessage = err?.response?.data?.message || err.message || defaultMessage;
    toast.error(errorMessage);
    setError(errorMessage);
  };

  const { mutateAsync: login } = useMutation(loginApi, {
    onSuccess: () => {
      toast.success('Login successful! 🎉');
    },
    onError: (err) => handleError(err, 'Login failed ❌'),
    onMutate: () => {
      setIsLoading(true);
      setError(null);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const { mutateAsync: register } = useMutation(registerApi, { 
    onSuccess: () => {
      toast.success('Registration successful! 🎉');
    },
    onError: (err) => handleError(err, 'Registration failed ❌'),
    onMutate: () => {
      setIsLoading(true);
      setError(null);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return { login, register, isLoading, error }; 
};
