import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';
import ProfileEditForm from '../components/ProfileEdit/ProfileEditForm';
import ProfileEditHeader from '../components/ProfileEdit/ProfileEditHeader';
import ProfileEditImage from '../components/ProfileEdit/ProfileEditImage';
import Loading from '../components/Loading/Loading';
import '../components/ProfileEdit/profileEdit.css';
import { UserType } from '../types';

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

      <ProfileEditHeader />

      <main className="main-edit-profile">

        {!loading ? (
          <>
            <ProfileEditImage
              userData={ user }
            />

            <ProfileEditForm
              user={ user }
              onChange={ handleChange }
              onChangeTextArea={ handleChangeTextArea }
              handleSubmit={ handleSubmit }
              validateInputs={ validateInputs }
              validateEmail={ validateEmail }
              validateURL={ validateURL }
            />
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
