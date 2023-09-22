import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import LoginLoading from '../components/Login/LoginLoading';
import LoginForm from '../components/Login/LoginForm';
import '../components/Login/login.css';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (name: string) => {
    try {
      setLoading(true);
      await createUser({ name });
      navigate('/search');
    } catch (error) {
      console.error('Error fetching data!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container-login">
      <section className="section-login">
        {!loading ? (
          <LoginForm
            onSubmit={ handleSubmit }
          />
        ) : (
          <LoginLoading />
        )}
      </section>
    </main>
  );
}
