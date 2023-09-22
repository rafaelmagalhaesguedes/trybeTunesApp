import { Link } from 'react-router-dom';
import { UserType } from '../../types';
import imagemPadrao from '../../images/user-mock.png';

interface UserProfileProps {
  user: UserType | null;
}

function UserProfile({ user } : UserProfileProps) {
  return (
    <div className="section-profile">
      <div className="foto-profile">
        <img
          className="foto"
          src={ user?.image || imagemPadrao }
          alt="user"
          data-testid="profile-image"
        />
      </div>
      <div className="user-profile">
        <div className="user-name-profile">
          <label htmlFor="data">Nome</label>
          <p className="data">{user?.name}</p>
        </div>
        <div className="user-email">
          <label htmlFor="data">Email</label>
          <p className="data">{user?.email}</p>
        </div>
        <div className="user-description">
          <label htmlFor="data">Descrição</label>
          <p className="data">{user?.description}</p>
        </div>
        <Link to="/profile/edit" className="button-edit-profile">
          Editar perfil
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
