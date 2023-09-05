import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserType } from '../types';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../css/profile.css';

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
      <div className="header-profile" />

      {!loading ? (
        <div className="section-profile">

          <div className="foto-profile">
            <img
              className="foto"
              src={ user?.image }
              alt="user"
              data-testid="profile-image"
            />
          </div>

          <div className="user-profile">

            <div className="user-name-profile">
              <label htmlFor="data">Nome</label>
              <p className="data">{ user?.name }</p>
            </div>

            <div className="user-email">
              <label htmlFor="data">Email</label>
              <p className="data">{ user?.email }</p>
            </div>

            <div className="user-description">
              <label htmlFor="data">Description</label>
              <p className="data">{ user?.description }</p>
            </div>

            <Link to="/profile/edit" className="button-edit-profile">
              Editar perfil
            </Link>
          </div>
        </div>
      ) : (
        <div className="loading-profile">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Profile;
