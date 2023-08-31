import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default function Login() {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [validaName, setValidaName] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (validaName) {
      setLoading(true);
      try {
        await createUser({ name: nameValue });
        navigate('/search');
      } catch (error) {
        console.log('Error', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setValidaName(nameValue.length > 2);
    setButtonDisabled(!validaName);
    setLoading(false);
  }, [nameValue, validaName]);

  return (
    <div>
      <h1>Login</h1>
      {loading ? (
        <Loading />
      ) : (
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
              disabled={ buttonDisabled }
              onClick={ handleSubmit }
            >
              Entrar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
