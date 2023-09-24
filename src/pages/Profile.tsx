import { useEffect, useState } from 'react';
import { UserType } from '../types';
import { getUser } from '../services/userAPI';
import UserProfile from '../components/Profile/UserProfile';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import {
  ContainerProfile,
  HeaderProfile,
  LoadingProfile,
} from '../components/Profile/Styles';

function Profile() {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserAPI = async () => {
      try {
        setLoading(true);
        const userDataProfile = await getUser();
        setUser(userDataProfile);
      } catch (error) {
        console.error('Error fetching data!', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserAPI();
  }, []);

  return (
    <ContainerProfile>
      <Navbar />
      <HeaderProfile />
      {!loading ? (
        <UserProfile user={ user } />
      ) : (
        <LoadingProfile>
          <Loading />
        </LoadingProfile>
      )}
    </ContainerProfile>
  );
}

export default Profile;
