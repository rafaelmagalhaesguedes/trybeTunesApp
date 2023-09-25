import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { UserType } from '../../types';
import {
  FormEditProfile,
  Input,
  EditEmail,
  InputEditName,
  Label,
  Paragraph,
  EditInputEmail,
  EditEmailInputIcons,
  EditInputDescription,
  Textarea,
  InputEditImage,
  InputEditImageUrl,
  InputImage,
  ButtomSaveForm,
  ButtomForm,
  IconValid,
  IconInvalid,
  LinkCancel,
} from './Styles';

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
    <FormEditProfile>
      <InputEditName>
        <Label htmlFor="name">
          Nome
        </Label>
        <Paragraph>
          Fique à vontade para usar seu nome social
        </Paragraph>
        <Input
          data-testid="edit-input-name"
          id="name"
          name="name"
          value={ user.name }
          onChange={ onChange }
          placeholder="Nome"
          required
        />
      </InputEditName>

      <EditEmail>
        <Label htmlFor="email">
          E-mail
        </Label>
        <Paragraph>
          Escolha um e-mail que consulte diariamente
        </Paragraph>
      </EditEmail>

      <EditEmailInputIcons>
        <EditInputEmail
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
      </EditEmailInputIcons>

      <EditInputDescription>
        <Label htmlFor="description">
          Descrição
        </Label>
        <Textarea
          className="edit-textarea"
          data-testid="edit-input-description"
          id="description"
          name="description"
          value={ user.description }
          onChange={ onChangeTextArea }
          placeholder="Sobre mim"
          required
        />
      </EditInputDescription>

      <InputEditImage>
        <Label htmlFor="image">
          Url da imagem
        </Label>
      </InputEditImage>

      <InputEditImageUrl>
        <InputImage
          data-testid="edit-input-image"
          id="image"
          name="image"
          value={ user.image }
          onChange={ onChange }
          placeholder="Insira um link"
          required
        />
        {validateURL() ? (
          <IconValid icon={ faCircleExclamation } />
        ) : (
          <IconInvalid icon={ faCircleExclamation } />
        )}
      </InputEditImageUrl>

      <ButtomSaveForm>
        <ButtomForm
          data-testid="edit-button-save"
          type="submit"
          onClick={ onSubmit }
          disabled={ !validateInputs() }
        >
          Salvar
        </ButtomForm>
        <LinkCancel to="/profile">Cancelar</LinkCancel>
      </ButtomSaveForm>
    </FormEditProfile>
  );
}

export default ProfileEditForm;
