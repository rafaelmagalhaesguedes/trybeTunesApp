import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { UserType } from '../../types';

interface ProfileEditFormProps {
  user: UserType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  validateInputs: () => boolean | undefined;
  validateEmail: () => boolean;
  validateURL: () => boolean;
}

function ProfileEditForm({
  user,
  onChange,
  onChangeTextArea,
  onSubmit,
  validateInputs,
  validateEmail,
  validateURL,
} : ProfileEditFormProps) {
  return (
    <form className="form-edit-profile">
      <div className="input-edit">
        <label htmlFor="name">Nome</label>
        <p>Fique à vontade para usar seu nome social</p>
        <input
          data-testid="edit-input-name"
          id="name"
          name="name"
          value={ user.name }
          onChange={ onChange }
          placeholder="Nome"
          required
        />
      </div>

      <div className="input-edit-email">
        <label htmlFor="email">E-mail</label>
        <p>Escolha um e-mail que consulte diariamente</p>
      </div>
      <div className="input-icon-edit">
        <input
          data-testid="edit-input-email"
          id="email"
          name="email"
          value={ user.email }
          onChange={ onChange }
          placeholder="email@email.com"
          required
        />
        {validateEmail() ? (
          <FontAwesomeIcon className="icon-valid" icon={ faCircleExclamation } />
        ) : (
          <FontAwesomeIcon className="icon-invalid" icon={ faCircleExclamation } />
        )}
      </div>

      <div className="input-edit-description">
        <label htmlFor="description">Description</label>
        <textarea
          className="edit-textarea"
          data-testid="edit-input-description"
          id="description"
          name="description"
          value={ user.description }
          onChange={ onChangeTextArea }
          placeholder="Sobre mim"
          required
        />
      </div>

      <div className="input-edit-image-url">
        <label htmlFor="image">Image url</label>
      </div>
      <div className="input-icon-edit-url">
        <input
          data-testid="edit-input-image"
          id="image"
          name="image"
          value={ user.image }
          onChange={ onChange }
          placeholder="Insira um link"
          required
        />
        {validateURL() ? (
          <FontAwesomeIcon className="icon-valid" icon={ faCircleExclamation } />
        ) : (
          <FontAwesomeIcon className="icon-invalid" icon={ faCircleExclamation } />
        )}
      </div>

      <div className="button-save-form">
        <button
          data-testid="edit-button-save"
          type="submit"
          onClick={ onSubmit }
          disabled={ !validateInputs() }
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default ProfileEditForm;
