import { useState } from 'react';
import Logo from '../../images/logo.png';
import { Login, Form, Image, Input, Button } from './styles';

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
    <Login>
      <Form onSubmit={ handleSubmit }>
        <Image src={ Logo } alt="Logo" />
        <Input
          data-testid="login-name-input"
          id="name"
          name="name"
          value={ nameValue }
          onChange={ handleChangeName }
          placeholder="qual é o seu nome?"
          required
        />
        <Button
          className="button-login"
          data-testid="login-submit-button"
          type="submit"
          disabled={ !validaInput }
        >
          Entrar
        </Button>
      </Form>
    </Login>
  );
}

export default LoginForm;
