import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserType } from '../types';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

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

  if (loading) return <Loading />;

  return (
    <>
      <h1>Profile</h1>
      <div className="user-data">
        <p>{ user?.name }</p>
        <p>{ user?.email }</p>
        <p>{ user?.description }</p>
        <img
          src={ user?.image }
          alt="user"
          data-testid="profile-image"
        />
        <Link to="/profile/edit">Editar perfil</Link>
      </div>
    </>
  );
}

export default Profile;
