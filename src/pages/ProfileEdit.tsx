import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { UserType } from '../types';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../css/profileEdit.css';

function ProfileEdit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    description: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateInputs = () => {
    const userName = user.name.length > 0;
    const userEmail = user.email.length > 0 && validateEmail();
    const userDescription = user.description.length > 0;
    const userImage = user.image.length > 0;
    if (userName && userEmail && userDescription && userImage) {
      return true;
    }
  };

  const validateEmail = () => {
    const emails = user.email;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    return emailRegex.test(emails);
  };

  const validateURL = () => {
    const urls = user.image;
    try {
      const parsedURL = new URL(urls);
      return parsedURL.protocol === 'https:';
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = () => {
    try {
      setLoading(true);
      updateUser(user);
      navigate('/profile');
    } catch (error) {
      console.error('Error fetching data!', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserAPI = async () => {
      try {
        setLoading(true);
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching data!', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserAPI();
  }, []);

  return (
    <div className="container-edit-profile">

      <div className="header-edit-profile" />

      <main className="main-edit-profile">

        {!loading ? (
          <>
            <div className="image-user-profile">
              <img
                className="image-user-edit-profile"
                src={ user.image }
                alt="ImageUserProfile"
              />
            </div>

            <form className="form-edit-profile">

              <div className="input-edit">
                <label htmlFor="name">Nome</label>
                <p>Fique à vontade para usar seu nome social</p>
                <input
                  data-testid="edit-input-name"
                  id="name"
                  name="name"
                  value={ user.name }
                  onChange={ handleChange }
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
                  onChange={ handleChange }
                  placeholder="email@email.com"
                  required
                />
                {validateEmail() ? (
                  <FontAwesomeIcon
                    className="icon-valid"
                    icon={ faCircleExclamation }
                  />
                ) : (
                  <FontAwesomeIcon
                    className="icon-invalid"
                    icon={ faCircleExclamation }
                  />
                )}
              </div>

              <div className="input-edit-description">
                <label htmlFor="description">Description</label>
                <textarea
                  className="edit-input-description"
                  data-testid="edit-input-description"
                  id="description"
                  name="description"
                  value={ user.description }
                  onChange={ handleChangeTextArea }
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
                  onChange={ handleChange }
                  placeholder="Insira um link"
                  required
                />
                {validateURL() ? (
                  <FontAwesomeIcon
                    className="icon-valid"
                    icon={ faCircleExclamation }
                  />
                ) : (
                  <FontAwesomeIcon
                    className="icon-invalid"
                    icon={ faCircleExclamation }
                  />
                )}
              </div>

              <div className="button-save-form">
                <button
                  data-testid="edit-button-save"
                  type="submit"
                  onClick={ handleSubmit }
                  disabled={ !validateInputs() }
                >
                  Salvar
                </button>
              </div>

            </form>
          </>
        ) : (
          <div className="loading-profile-edit">
            <Loading />
          </div>
        )}
      </main>
    </div>
  );
}

export default ProfileEdit;
