import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../css/login.css';
import Logo from '../images/logo.png';

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
    <main className="container-login">
      <section className="section-login">
        <div className="login">
          <img className="img-logo" src={ Logo } alt="Logo" />
          <form className="form-login">
            <input
              className="input-login"
              data-testid="login-name-input"
              id="name"
              name="name"
              value={ nameValue }
              onChange={ handleChangeName }
              placeholder="qual é o seu nome?"
              required
            />
            <button
              className="button-login"
              data-testid="login-submit-button"
              type="submit"
              disabled={ !validaInput }
              onClick={ handleSubmit }
            >
              Entrar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
