import { useState } from 'react';
import Logo from '../../images/logo.png';

interface LoginFormProps {
  onSubmit: (name: string) => void;
}

function LoginForm({ onSubmit } : LoginFormProps) {
  const [nameValue, setNameValue] = useState('');
  const [validaInput, setValidaInput] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNameValue = e.target.value;
    setNameValue(newNameValue);
    setValidaInput(newNameValue.length > 2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validaInput) {
      onSubmit(nameValue);
    }
  };

  return (
    <div className="login">
      <form className="form-login" onSubmit={ handleSubmit }>
        <img className="img-logo" src={ Logo } alt="Logo" />
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
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
