import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';

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

  const validateInputs = () => {
    const userName = user.name.length > 0;
    const userEmail = user.email.length > 0 && /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const userDescription = user.description.length > 0;
    const userImage = user.image.length > 0;
    if (userName && userEmail && userDescription && userImage) {
      return true;
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

  if (loading) return <Loading />;

  return (
    <div className="edit-profile-form">
      <form className="form">
        <div className="input-name">
          <label htmlFor="name">Nome</label>
          <input
            data-testid="edit-input-name"
            id="name"
            name="name"
            value={ user.name }
            onChange={ handleChange }
            required
          />
        </div>

        <div className="input-email">
          <label htmlFor="email">Email</label>
          <input
            data-testid="edit-input-email"
            id="email"
            name="email"
            value={ user.email }
            onChange={ handleChange }
            required
          />
        </div>

        <div className="input-description">
          <label htmlFor="description">Description</label>
          <input
            data-testid="edit-input-description"
            id="description"
            name="description"
            value={ user.description }
            onChange={ handleChange }
            required
          />
        </div>

        <div className="input-image">
          <label htmlFor="image">Image</label>
          <input
            data-testid="edit-input-image"
            id="image"
            name="image"
            value={ user.image }
            onChange={ handleChange }
            required
          />
        </div>

        <div className="button-save-form">
          <button
            data-testid="edit-button-save"
            type="submit"
            onClick={ handleSubmit }
            disabled={ !validateInputs() }
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileEdit;
