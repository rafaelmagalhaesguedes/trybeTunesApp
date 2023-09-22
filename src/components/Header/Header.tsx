import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';
import './header.css';
import Logo from '../../images/logo.png';
import imagemPadrao from '../../images/user-mock.png';

export default function Header() {
  const [name, setName] = useState('');
  const [imageUser, setImageUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleUserName = async () => {
      try {
        setLoading(true);
        const result = await getUser();
        setName(result.name);
        setImageUser(result.image);
      } catch (error) {
        console.error('Erro fetching data!', error);
      } finally {
        setLoading(false);
      }
    };
    handleUserName();
  }, []);

  return (
    <header data-testid="header-component">
      <Link to="/search">
        <img className="header-logo" src={ Logo } alt="Logo" />
      </Link>

      <nav className="navbar">
        <NavLink to="/search" className="nav-link" data-testid="link-to-search">
          <FontAwesomeIcon className="icon" icon={ faSearch } />
          Search
        </NavLink>
        <NavLink to="/favorites" className="nav-link" data-testid="link-to-favorites">
          <FontAwesomeIcon className="icon" icon={ faStar } />
          Favorites
        </NavLink>
        <NavLink to="/profile" className="nav-link" data-testid="link-to-profile">
          <FontAwesomeIcon className="icon" icon={ faUser } />
          Profile
        </NavLink>
      </nav>
      {!loading ? (
        <div className="user">
          <img className="image-user" src={ imageUser || imagemPadrao } alt="imageUser" />
          <p className="user-name" data-testid="header-user-name">{name}</p>
        </div>
      ) : (
        <div className="loading-header">
          <Loading />
        </div>
      )}
    </header>
  );
}
