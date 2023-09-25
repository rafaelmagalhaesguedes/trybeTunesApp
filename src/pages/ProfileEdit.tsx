import { useEffect, useState } from 'react';
import { getUser, updateUser } from '../services/userAPI';
import ProfileEditForm from '../components/ProfileEdit/ProfileEditForm';
import imagemPadrao from '../images/user-mock.png';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import { UserType } from '../types';
import {
  ContainerEditProfile,
  HeaderEditProfile,
  LoadingEditProfile,
  MainEditProfile,
  ImageUser,
  ImageUserProfile,
} from '../components/ProfileEdit/Styles';

function ProfileEdit() {
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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await updateUser(user);
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
    <ContainerEditProfile>
      <Navbar />
      <HeaderEditProfile />
      <MainEditProfile>
        {!loading ? (
          <>
            <ImageUserProfile>
              <ImageUser
                src={ user.image || imagemPadrao }
                alt="Image User Profile"
              />
            </ImageUserProfile>

            <ProfileEditForm
              user={ user }
              onChange={ handleChange }
              onChangeTextArea={ handleChangeTextArea }
              onSubmit={ handleSubmit }
              validateInputs={ validateInputs }
              validateEmail={ validateEmail }
              validateURL={ validateURL }
            />
          </>
        ) : (
          <LoadingEditProfile>
            <Loading />
          </LoadingEditProfile>
        )}
      </MainEditProfile>
    </ContainerEditProfile>
  );
}

export default ProfileEdit;
