import { useEffect, useState } from 'react';
import { UserType } from '../types';
import { getUser } from '../services/userAPI';
import UserProfile from '../components/Profile/UserProfile';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import '../components/Profile/profile.css';

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
    <div className="container-profile">

      <Navbar />

      <div className="header-profile" />

      {!loading ? (
        <UserProfile user={ user } />
      ) : (
        <div className="loading-profile">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Profile;
