import "../components/login.css"
import React, { useState } from 'react'; 
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import { useAuth } from '../hooks/useAuth';
    import { loginSchema } from '../utils/validationSchema';
    import InputField from './InputField';

    const LoginForm: React.FC = () => {
      const { login, register, isLoading, error } = useAuth(); 
      const [isRegistering, setIsRegistering] = useState(false); 
      const {
        register: formRegister, 
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(loginSchema),
      });

      const onSubmit = async (data: any) => {
        if (isRegistering) {
          await register(data);
        } else {
          await login(data);
        }
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>{isRegistering ? 'Register' : 'Welcome back!'}</h2>

          <InputField
            label="Email" 
            id="email"
            type="text"
            register={formRegister('email')}
            error={errors.email?.message}
          />

          <InputField
            label="Password"
            id="password"
            type="password"
            register={formRegister('password')}
            error={errors.password?.message}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : isRegistering ? 'Register' : 'Login'}
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
          </button>


        </form>
      );
    };

    export default LoginForm;