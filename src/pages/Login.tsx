import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default function Login() {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [loading, setLoading] = useState(false);

  const validaInput = nameValue.length > 2;

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await createUser({ name: nameValue });
      navigate('/search');
    } catch (error) {
      console.error('Error fetching data!', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="name-input">
          <label htmlFor="name">Nome</label>
          <input
            data-testid="login-name-input"
            id="name"
            name="name"
            value={ nameValue }
            onChange={ handleChangeName }
            required
          />
        </div>
        <div className="submit-button">
          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ !validaInput }
            onClick={ handleSubmit }
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
